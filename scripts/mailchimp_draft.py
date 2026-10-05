#!/usr/bin/env python3
"""Upload an Eldee mailing to Mailchimp as an editable template and a DRAFT campaign.

The campaign is only created as a draft. This script never sends or schedules.

Requires:
  MAILCHIMP_API_KEY   e.g. abc123...-us10 (the data center is read from the suffix)
Optional:
  MAILCHIMP_LIST_ID   audience to attach to the draft
  MAILCHIMP_FROM_NAME (default: Eldee Expo Experts)
  MAILCHIMP_REPLY_TO  (default: eldee@eldee.com)

Usage:
  python3 scripts/mailchimp_draft.py output/Eldee_Mailing_EN_EuroCIS_mailchimp.html \
      --name "EuroCIS 2027" \
      --subject "EuroCIS 2027 · Make your retail tech tangible" \
      --preview "Retailers don't buy software from a screen. ..."
"""
import argparse
import base64
import json
import os
import sys
import urllib.error
import urllib.request


def api(method, path, body=None):
    key = os.environ["MAILCHIMP_API_KEY"]
    dc = key.rsplit("-", 1)[-1]
    req = urllib.request.Request(
        f"https://{dc}.api.mailchimp.com/3.0{path}",
        method=method,
        data=json.dumps(body).encode() if body is not None else None,
        headers={
            "Authorization": "Basic " + base64.b64encode(f"anystring:{key}".encode()).decode(),
            "Content-Type": "application/json",
        },
    )
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            raw = r.read()
            return json.loads(raw) if raw else {}
    except urllib.error.HTTPError as e:
        sys.exit(f"Mailchimp API {method} {path} failed: {e.code} {e.read().decode()}")


def main():
    p = argparse.ArgumentParser()
    p.add_argument("html")
    p.add_argument("--name", required=True, help="campaign and template name")
    p.add_argument("--subject", required=True)
    p.add_argument("--preview", required=True)
    a = p.parse_args()

    if "MAILCHIMP_API_KEY" not in os.environ:
        sys.exit("MAILCHIMP_API_KEY is not set")

    html = open(a.html, encoding="utf-8").read()
    dc = os.environ["MAILCHIMP_API_KEY"].rsplit("-", 1)[-1]

    api("GET", "/ping")
    template = api("POST", "/templates", {"name": f"Eldee – {a.name}", "html": html})

    campaign = {
        "type": "regular",
        "settings": {
            "title": f"Eldee – {a.name}",
            "subject_line": a.subject,
            "preview_text": a.preview,
            "from_name": os.environ.get("MAILCHIMP_FROM_NAME", "Eldee Expo Experts"),
            "reply_to": os.environ.get("MAILCHIMP_REPLY_TO", "eldee@eldee.com"),
            "template_id": template["id"],
        },
    }
    if os.environ.get("MAILCHIMP_LIST_ID"):
        campaign["recipients"] = {"list_id": os.environ["MAILCHIMP_LIST_ID"]}
    created = api("POST", "/campaigns", campaign)
    api("PUT", f"/campaigns/{created['id']}/content", {"template": {"id": template["id"]}})

    print(f"Template id: {template['id']}")
    print(f"Draft campaign id: {created['id']} (status: {created.get('status')})")
    print(f"Open: https://{dc}.admin.mailchimp.com/campaigns/edit?id={created['web_id']}")
    print("Not sent. Not scheduled.")


if __name__ == "__main__":
    main()
