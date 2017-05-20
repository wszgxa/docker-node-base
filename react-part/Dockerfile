FROM node:7.10.0-slim
# replace this with your application's default port
EXPOSE 8080 8080

COPY app /app
COPY react_entry.sh /react_entry.sh
RUN cd app && npm install

ENTRYPOINT ["/react_entry.sh"]
