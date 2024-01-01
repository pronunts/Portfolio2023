docker-up:
	docker build -t danieljsaldana-dev . 
	docker-compose --env-file .env up -d

test:
	npm test