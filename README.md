# cocktail-wiki

run command:
docker run --name cocktail -p 5433:5432 -e POSTGRES_PASSWORD=postgres -d cocktaildb

cat ./server/scripts.sql | docker exec -i cocktail psql -U postgres -d postgres
