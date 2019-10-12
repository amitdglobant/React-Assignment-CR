# specify the node base image with your desired version node:<version>
FROM node:10

# RUN apt-get update
# RUN apt-get install sudo

# RUN adduser --disabled-password --gecos '' docker
# RUN adduser docker sudo
# RUN echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers

# USER docker
# RUN sudo sysctl -w fs.inotify.max_user_watches=524288
# RUN sudo sysctl -p

WORKDIR /home/node/app
USER node