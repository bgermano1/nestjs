#!/bin/bash
#promtail -config.file=/etc/promtail/promtail-config.yaml > /dev/null 2>&1 &
promtail -config.file=/etc/promtail/promtail-config.yaml &
npm run start:dev