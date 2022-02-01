const help_text = `
======== RSSFEED ========

/help
  Show this help text

/list
  List all RSS sources

/fetch [category]
  Fetch RSS feed from the
  source

/add <category> <source>
  Fetch RSS feed from the
  source

=========================
`

function help(ctx) {
  ctx.reply(help_text);
}

export default help;
