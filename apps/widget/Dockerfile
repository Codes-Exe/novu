FROM node:23.10.0

WORKDIR /usr/src/app

RUN npm i pnpm -g --loglevel notice --force

COPY package.json .

COPY apps/widget ./apps/widget

COPY libs/dal ./libs/dal
COPY libs/embed ./libs/embed
COPY libs/testing ./libs/testing
COPY libs/shared ./libs/shared
COPY packages/notification-center ./packages/notification-center

COPY tsconfig.json .
COPY tsconfig.base.json .

COPY .eslintrc.js .
COPY .prettierrc .
COPY .prettierignore .
COPY nx.json .
COPY pnpm-workspace.yaml .
COPY pnpm-lock.yaml .

RUN pnpm install

RUN pnpm build:widget

CMD [ "pnpm", "start:static:widget" ]
