#!/bin/bash


mkdir -p ./generated
for I in {1..12}
do
  mv ./images/${I}.png ./images/${I}
done
