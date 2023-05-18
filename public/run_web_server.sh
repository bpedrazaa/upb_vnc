#! /bin/bash

vnc_server_port=$(jq .vncServerPort ./utils/credentials.json | tr -d '"')
vnc_server_ip_addr=$(jq .vncServerIpAddress ./utils/credentials.json | tr -d '"')

./utils/novnc_proxy --vnc $vnc_server_ip_addr:$vnc_server_port --file-only
