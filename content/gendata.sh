#!/bin/bash

mkdir -p ../images/metadata
for I in {1..12}
do
  export IPFS_CID=$(ipfs add -q --only-hash ./images/$I | ipfs cid base32)
  export TOKEN_ID=$I
  cat ./metadata.json.tmpl | envsubst | tee ./metadata/${I}
done
