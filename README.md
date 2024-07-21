![Static Badge](https://img.shields.io/badge/Sidra-chain-gold)

<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://github.com/KOSASIH/cosmia-core">Cosmia</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://www.linkedin.com/in/kosasih-81b46b5a">KOSASIH</a> is licensed under <a href="https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">Creative Commons Attribution 4.0 International<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""></a></p>

# cosmia-core
The central repository for the Cosmia project, containing the core architecture and infrastructure for the Sidra Chain.

Cosmia Core
============

The central repository for the Cosmia project, containing the core architecture and infrastructure for the Sidra Chain.

Project Cosmia is an ambitious initiative to develop the Sidra Chain, a revolutionary, high-tech network that interconnects stars and galaxies across the universe. By harnessing the power of advanced technologies, Cosmia aims to create a vast, celestial network that enables seamless communication, data exchange, and cooperation between diverse, intelligent life forms. This groundbreaking project will propel humanity to the forefront of intergalactic exploration, fostering a new era of cosmic collaboration, discovery, and progress.

Getting Started
---------------

### Installation

1. Clone the repository: `git clone https://github.com/KOSASIH/cosmia-core.git`
2. Install dependencies: `npm install`

### Running the Application

1. Start the server: `npm start`

API Endpoints
-------------

### Register

* **POST /register**
	+ Request Body: `username`, `email`, `password`
	+ Response: `201 Created` with a success message

### Login

* **POST /login**
	+ Request Body: `username`, `password`
	+ Response: `200 OK` with a success message

### Send Message

* **POST /send-message**
	+ Request Body: `from`, `to`, `content`, `type`, `priority`
	+ Response: `201 Created` with a success message

### Get Messages

* **GET /messages**
	+ Query Parameter: `userId`
	+ Response: `200 OK` with an array of messages

License
-------

Apache 2.0 License

Copyright 2024 KOSASIH

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

We read every piece of feedback, and take your input very seriously.
