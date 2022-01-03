const help_text = `
======== RSSFEED ========

/help
  Show this help text

/list
  List all RSS sources

/fetch <source>
  Fetch RSS feed from the
  source

=========================
`

function help(ctx) {
  ctx.reply(help_text);
}

export default help;
