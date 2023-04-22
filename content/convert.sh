#!/bin/bash


mkdir -p ./generated
for I in {1..12}
do
  convert ./jpg/${I}.jpg ./images/${I}.png
done
