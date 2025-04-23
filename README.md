  # 𓁶 Egyptian Mythology Mock API

  [![API Status](https://img.shields.io/badge/API%20Status-Stable-%2344AF37)](https://mariviana.dev/egyptian-mythology-mock-api/v1)
  ![GitHub last commit](https://img.shields.io/github/last-commit/marianaviana/egyptian-mythology-mock-api)
  ![GitHub repo size](https://img.shields.io/github/repo-size/marianaviana/egyptian-mythology-mock-api)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  A free mock API for Egyptian mythology data, perfect for developers building educational apps, games, or cultural projects. Here you will find information about gods, creatures, symbols and much more...

  Current Endpoint Base:

  ```bash
  https://mariviana.dev/egyptian-mythology-mock-api/v1
  ```

  ## **Special Files**:
  - `index.json`: Map of all resources
  - `versions.json`: Version control


  ## Resources v1:

  ```json
  {
    "resources": {
      "gods": {
        "description": "Collection of Egyptian deities",
        "count": 15,
        "listEndpoint": "/gods/gods.json",
        "itemEndpoint": "/gods/{id}.json",
        "exampleItem": "/gods/ra.json"
      },
      "creatures": {
        "description": "Mythological creatures from Egyptian lore",
        "count": 10,
        "listEndpoint": "/creatures/creatures.json",
        "itemEndpoint": "/creatures/{id}.json",
        "exampleItem": "/creatures/ammit.json"
      },
      "symbols": {
        "description": "Sacred symbols and their meanings",
        "count": 10,
        "listEndpoint": "/symbols/symbols.json",
        "itemEndpoint": "/symbols/{id}.json",
        "exampleItem": "/symbols/ankh.json"
      },
      "stories": {
        "description": "Ancient Egyptian myths and legends",
        "count": 10,
        "listEndpoint": "/stories/stories.json",
        "itemEndpoint": "/stories/{id}.json",
        "exampleItem": "/stories/osiris-isis.json"
      },
      "places": {
        "description": "Sacred sites and mythological locations",
        "count": 10,
        "listEndpoint": "/places/places.json",
        "itemEndpoint": "/places/{id}.json",
        "exampleItem": "/places/duat.json"
      }
    }
  }
  ```


  ## 🏺 Features
  - 60+ entities covering gods, creatures, and symbols
  - Static JSON files (GitHub Pages compatible)
  - Versioned endpoints (/v1/, /v2/)
  - i18n-ready structure (coming in v2)


  ## 📜 Quick Start
  Example:
  ```bash
  # Fetch all gods
  curl https://mariviana.dev/egyptian-mythology-mock-api/v1/gods/gods.json
  ```

  ## Popular Endpoints:
  - `/v1/gods/ra.json`
  - `/v1/creatures/ammit.json`
  - `/v1/symbols/ankh.json`


  ## 🌐 Project Structure
  ```bash
  ├── v1/
  ├── ├── index.json
  ├── ├── gods/
  │   │   ├── gods.json
  │   │   ├── anubis.json
  │   │   └── ...
  │   ├── creatures/
  │   │   ├── creatures.json
  │   │   └── apophis.json
  │   ├── stories/
  │   │   ├── stories.json
  │   │   └── osiris_isis.json
  │   ├── artifacts/
  │   │   ├── artifacts.json
  │   │   └── ankh.json
  │   └── places/
  │   │   ├── places.json
  │   │   └── gizah.json
  ├── assets/
  ├── ├── css
  │   │   ├── style.css
  ├── ├── js
  │   │   ├── script.js
  ├── versions.json
  ├── CHANGELOG.md
  ├── LICENSE
  ├── README.md
  └── index.html
  ```

  ## 𓂀 Contributing

  Contributions are welcome! Please take a look at our digitized [Contribution Guidelines](https://github.com/marianaviana/egyptian-mythology-mock-api/blob/main/CONTRIBUTING.md) papyrus...


  ## 📚 Resources
  - [Official Documentation](https://mariviana.dev/egyptian-mythology-mock-api/)

  ## License
  - [MIT](https://github.com/marianaviana/egyptian-mythology-mock-api/blob/main/LICENSE) © [Mariana Viana](https://github.com/marianaviana/)
