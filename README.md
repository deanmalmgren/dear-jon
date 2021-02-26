# dear-jon
A MadLib Dear John letter, from Jon.

## How it works

Inspired by [ineedsomespace.com](http://www.ineedsomespace.com/) and Jon's love of MadLibs.

Original copy in [this Google Doc](https://docs.google.com/document/d/1Z4Bqmjy1lr9JnHodQTMyrrv9kUA978g8n9sky_qyXBs/edit), which we've transposed into [this Google Form](https://docs.google.com/forms/d/1iQkCq6F-nNC0M0D5_62jjDXWF7m3qfesk4CMflTjq5Q/edit) whose responses are captured in [this Google Spreadsheet](https://docs.google.com/spreadsheets/d/1e8Cv5grW3y_PzfuLp0yOTmQDQnSy4Q1TgLkXHYx34pU/edit#gid=34143114).

To avoid cross-site domain issues, run the `./download.sh` script to download
the data when the survey is complete and then host the site using python simple
server:

```bash
./download.sh && python3 -m http.server 8000
```

Then open your browser to http://localhost:8000 to view the MadLib.
