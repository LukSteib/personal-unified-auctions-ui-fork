# Unified Auctions UI

## Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate

# for component development
$ npm run storybook

# to run jest tests
$ npm run test
```

## Development Setup

Please see [this centralized guide](https://github.com/sidestream-tech/guides/blob/main/frontend-development/README.md) to get started with your development setup. Namely, you should:

- have a minimum `node` and `npm` version (see `package.json` `engine` section)
- have a certain formatting and linting setup

Help on both things is given in the linked resources above.

### Environment variables

- `RPC_URL`: (required) Etherium RPC url used for fetching data from the blockchain
    - In case [infura](https://infura.io/) url is used, we automatically add list of default networks
- `DEMO_MODE`: (optional) When set to true the page will only show a "Coming soon" screen. Can be used for production while the page is not ready yet.
- `PRODUCTION_DOMAIN`: (optional) Required in order to enable [plausible.io statistics](https://github.com/moritzsternemann/vue-plausible#configuration). In addition to adding it here, the domain (e.g. `auctions.makerdao.network`) should also be registered within [plausible dashboard](https://plausible.io/).
- `CONTACT_EMAIL`: (optional) Required in order to display contact link in the footer. This email should be able to accept and manage bug reports and other contact requests.
- `STAGING_BANNER_URL`: (optional) When set a banner will be displayed, warning the user that they are using a staging version. The text will use `STAGING_BANNER_URL` as a link to production UI.
- `MAX_PRIORITY_FEE_PER_GAS_WEI`: (optional, default can be found in core/src/gas.ts) – [EIP-1559](https://eips.ethereum.org/EIPS/eip-1559) `max_priority_fee_per_gas` value
- `HEAPIO_ID`: (optional) [HeapIO analytics](https://heapanalytics.com/) Project's Environment ID. Required for tracking analytics.
- `FRONTEND_ORIGIN`: (optional, default empty) – public url of the frontend, eg `https://unified-auctions.makerdao.com`. Used to correctly specify open graph meta tags
- `ENABLE_FILE_PROTOCOL`: (optional, default `false`) – By setting this variable to `true`, `npm run generate` will set [vue router mode](https://v3.router.vuejs.org/api/#mode) to `hash` and produce html that can be opened without http server, via `file://` protocol
