FROM node:7.10.0-slim

EXPOSE 3030 3030
COPY app /app
COPY node_entry.sh /node_entry.sh
RUN cd app && npm install

ENTRYPOINT ["/node_entry.sh"]
