# Documentation

All SoySwap pairs consist of two different tokens. CLO is not a native currency in SoySwap, and is represented only by WCLO in the pairs. 

The canonical WCLO address used by the SoySwap interface is `0xF5AD6F6EDeC824C7fD54A66d241a227F6503aD3a`.

Results are cached for 5 minutes (or 300 seconds).

## [`/summary`](https://api.soy.finance/api/summary)

Returns data for the top ~20 SoySwap pairs, sorted by reserves. 

### Request

`GET https://api.soy.finance/api/summary`

### Response

```json5
{
  "updated_at": 1234567,              // UNIX timestamp
  "data": {
    "0x..._0x...": {                  // BEP20 token addresses, joined by an underscore
      "price": "...",                 // price denominated in token1/token0
      "base_volume": "...",           // last 24h volume denominated in token0
      "quote_volume": "...",          // last 24h volume denominated in token1
      "liquidity": "...",             // liquidity denominated in USD
      "liquidity_CLO": "..."          // liquidity denominated in CLO
    },
    // ...
  }
}
```

## [`/tokens`](https://api.soy.finance/api/tokens)

Returns the tokens in the top ~20 pairs on SoySwap, sorted by reserves.

### Request

`GET https://api.soy.finance/api/tokens`

### Response

```json5
{
  "updated_at": 1234567,              // UNIX timestamp
  "data": {
    "0x...": {                        // the address of the BEP20 token
      "name": "...",                  // not necessarily included for BEP20 tokens
      "symbol": "...",                // not necessarily included for BEP20 tokens
      "price": "...",                 // price denominated in USD
      "price_CLO": "...",             // price denominated in CLO
    },
    // ...
  }
}
```

## [`/tokens/0x...`](https://api.soy.finance/api/tokens/0x9FaE2529863bD691B4A7171bDfCf33C7ebB10a65)

Returns the token information, based on address.

### Request

`GET https://api.soy.finance/api/tokens/0x9FaE2529863bD691B4A7171bDfCf33C7ebB10a65`

### Response

```json5
{
  "updated_at": 1234567,              // UNIX timestamp
  "data": {
    "name": "...",                    // not necessarily included for BEP20 tokens
    "symbol": "...",                  // not necessarily included for BEP20 tokens
    "price": "...",                   // price denominated in USD
    "price_CLO": "...",               // price denominated in CLO
  }
}
```

## [`/pairs`](https://api.soy.finance/api/pairs)

Returns data for the top ~20 SoySwap pairs, sorted by reserves.

### Request

`GET https://api.soy.finance/api/pairs`

### Response

```json5
{
  "updated_at": 1234567,              // UNIX timestamp
  "data": {
    "0x..._0x...": {                  // the asset ids of CLO and BEP20 tokens, joined by an underscore
      "pair_address": "0x...",        // pair address
      "base_name": "...",             // token0 name
      "base_symbol": "...",           // token0 symbol
      "base_address": "0x...",        // token0 address
      "quote_name": "...",            // token1 name
      "quote_symbol": "...",          // token1 symbol
      "quote_address": "0x...",       // token1 address
      "price": "...",                 // price denominated in token1/token0
      "base_volume": "...",           // volume denominated in token0
      "quote_volume": "...",          // volume denominated in token1
      "liquidity": "...",             // liquidity denominated in USD
      "liquidity_CLO": "..."          // liquidity denominated in CLO
    },
    // ...
  }
}
```
