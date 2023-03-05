source ~/.bashrc


## dockerビルド
docker-compose up
docker-compose build --no-cache
docker-compose up

docker-compose exec go bash

go run main.go