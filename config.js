settings.hintAlign = "right";
settings.defaultSearchEngine = "w";
api.unmap('sb');
api.unmap('sd');
api.unmap('se');
api.unmap('sg');
api.unmap('sy');

settings.theme = `
.sk_theme {
  font-family: Input Sans Condensed, Charcoal, sans-serif;
  font-size: 10pt;
  background: #002B36;
  color: #93A1A1;
}
.sk_theme input {
  color: #93A1A1;
}
.sk_theme .url {
  color: #268BD2;
}
.sk_theme .annotation {
  color: #93A1A1;
}
.sk_theme kbd {
  background: #EEE8D5;
  color: #111;
}
.sk_theme .omnibar_highlight {
  color: #CB4B16;
}
.sk_theme .omnibar_folder {
  color: #2AA198;
}
.sk_theme .omnibar_timestamp {
  color: #657B83;
}
.sk_theme .omnibar_visitcount {
  color: #B58900;
}
.sk_theme .prompt, .sk_theme .resultPage {
  color: #93A1A1;
}
.sk_theme .feature_name {
  color: #859900;
}
.sk_theme .separator {
  color: #859900;
}
.sk_theme #sk_omnibarSearchResult ul li:nth-child(odd) {
  background: #002F3B;
}
.sk_theme #sk_omnibarSearchResult ul li.focused {
  background: #083D4A;
}
#sk_status, #sk_find {
  font-size: 12pt;
}
#sk_keystroke {
  background: #002B36;
}
.expandRichHints span.annotation {
  color: #93A1A1;
}`;
