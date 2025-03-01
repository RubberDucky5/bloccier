# Revamp frontend to use build instead
# Probably have to use a sever to host the built page

FROM node AS frontend

WORKDIR /frontend

COPY ./frontend/package.json .

RUN npm install

COPY ./frontend/ .

#RUN npm run build

CMD ["npm", "run", "dev", "--", "--host"]