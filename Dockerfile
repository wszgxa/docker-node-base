FROM node:7.10.0-slim
# replace this with your application's default port
EXPOSE 3030 3030

COPY app /app
COPY node_entry.sh /node_entry.sh
RUN cd app && npm install

ENTRYPOINT ["/node_entry.sh"]