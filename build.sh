docker stop ithaka-frontend
docker rm ithaka-frontend
docker build ./frontend -t ithaka/frontend
docker run --name ithaka-frontend -d -p 3001:3001 ithaka/frontend