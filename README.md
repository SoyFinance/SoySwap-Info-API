# SoySwap API

The SoySwap API is a set of endpoints used by market aggregators (e.g. coingecko.com) to surface SoySwap liquidity
and volume information. All information is fetched from the underlying subgraphs.

## Documentation

The documentation of the endpoints, for SoySwap v1, can be found [here](documentation.md).

## Development

### Install requirements

```shell
yarn global add vercel
```

### Build

```shell
# Install dependencies
yarn

# Build project
vercel dev
```

Endpoints are based on filename inside the `api/` folder.

```shell
# api/pairs.ts
curl -X GET 'localhost:3000/v1/pairs'

# ...
```

## Production

### Deploy

Deployments to production are triggered by a webhook when a commit, or a pull-request is merged to `master`.

If you need to force a deployment, use the following command:

```shell
vercel --prod
```
