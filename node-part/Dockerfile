FROM node:7.10.0-slim

EXPOSE 8080 8080
COPY app /app
COPY node_entry.sh /node_entry.sh
RUN cd app && npm install
ENV NODE_PORT=8080

ENTRYPOINT ["/node_entry.sh"]
