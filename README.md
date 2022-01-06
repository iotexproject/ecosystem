# IoTeX Ecosystem
This repository is the data source for the IoTeX Ecosystem page, located at https://github.com/iotexproject/ecosystem.

# Contributing Guidelines
A project is composed of two files: a Markdown file with headers, and an image (300x300). To add a new project to the ecosystem page, create both a new Markdown file in the projects directory and add a new image in the img directory.

!Important!: Should your Project already exist within this repo, refrain from creating a new Markdown file in the projects directory! Rather adapt your old one in a new PR. Same goes for changed images or Logos for your Project.

# Example File
``` mdx
---
title: ioTube
tag: DeFi,MachineFi,NFTs,Tools,GameFi,Wallet,Exchange,Partners
status: publish
date: 2020-08-31
slug: A cross-chain bridge to transfer tokens/data between IoTeX and other blockchains like Ethereum
website: https://tube.iotex.io
logo: /img/ioTube.png
telegram:
twitter:
---
```

Example(!) Markdown headers are above. Below are guidelines for each field:
- **(required)** `title`: The title of the project
- **(optional)** `tag`: The tag of the project,use english comma separation is required.You can only choose in : `DeFi`, `MachineFi`, `NFTs`,`Tools`,`GameFi`,`Exchange`,`Partners`
- **(required)** `logo`: A relative path to the corresponding image
- **(required)** `status`: The status of the project: `publish`, `building`, or `closed`
- **(required)** `website`: URL to the website (required)
- **(optional)** `twitter`: URL to Twitter page (optional)
- **(optional)** `telegram`: URL to Telegram channel (optional)
- **(optional)** `slug`: The description of your project



## License

[MIT](https://choosealicense.com/licenses/mit/)

