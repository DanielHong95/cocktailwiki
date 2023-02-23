#!/bin/bash
set -e
export PGPASSWORD=$POSTGRES_PASSWORD;
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
  CREATE USER $APP_DB_USER WITH PASSWORD '$APP_DB_PASS';
  CREATE DATABASE $APP_DB_NAME;
  GRANT ALL PRIVILEGES ON DATABASE $APP_DB_NAME TO $APP_DB_USER;
  \connect $APP_DB_NAME $APP_DB_USER
  BEGIN;
    CREATE TABLE IF NOT EXISTS public.cocktails
(
    "idDrinK" integer NOT NULL DEFAULT nextval('"cocktails_idDrinK_seq"'::regclass),
    "strDrink" character varying(255) COLLATE pg_catalog."default",
    "strDrinkAlternate" character varying(255) COLLATE pg_catalog."default",
    "strTags" character varying(255) COLLATE pg_catalog."default",
    "strVideo" character varying(255) COLLATE pg_catalog."default",
    "strCategory" character varying(255) COLLATE pg_catalog."default",
    "strIBA" character varying(255) COLLATE pg_catalog."default",
    "strAlcoholic" character varying(255) COLLATE pg_catalog."default",
    "strGlass" character varying(255) COLLATE pg_catalog."default",
    "strInstructions" character varying(8000) COLLATE pg_catalog."default",
    "strInstructionsES" character varying(8000) COLLATE pg_catalog."default",
    "strInstructionsDE" character varying(8000) COLLATE pg_catalog."default",
    "strInstructionsFR" character varying(8000) COLLATE pg_catalog."default",
    "strInstructionsIT" character varying(8000) COLLATE pg_catalog."default",
    "strInstructionsZHHANS" character varying(8000) COLLATE pg_catalog."default",
    "strInstructionsZHHANT" character varying(8000) COLLATE pg_catalog."default",
    "strDrinkThumb" character varying(255) COLLATE pg_catalog."default",
    "strIngredient1" character varying(255) COLLATE pg_catalog."default",
    "strIngredient2" character varying(255) COLLATE pg_catalog."default",
    "strIngredient3" character varying(255) COLLATE pg_catalog."default",
    "strIngredient4" character varying(255) COLLATE pg_catalog."default",
    "strIngredient5" character varying(255) COLLATE pg_catalog."default",
    "strIngredient6" character varying(255) COLLATE pg_catalog."default",
    "strIngredient7" character varying(255) COLLATE pg_catalog."default",
    "strIngredient8" character varying(255) COLLATE pg_catalog."default",
    "strIngredient9" character varying(255) COLLATE pg_catalog."default",
    "strIngredient10" character varying(255) COLLATE pg_catalog."default",
    "strIngredient11" character varying(255) COLLATE pg_catalog."default",
    "strIngredient12" character varying(255) COLLATE pg_catalog."default",
    "strIngredient13" character varying(255) COLLATE pg_catalog."default",
    "strIngredient14" character varying(255) COLLATE pg_catalog."default",
    "strIngredient15" character varying(255) COLLATE pg_catalog."default",
    "strMeasure1" character varying(255) COLLATE pg_catalog."default",
    "strMeasure2" character varying(255) COLLATE pg_catalog."default",
    "strMeasure3" character varying(255) COLLATE pg_catalog."default",
    "strMeasure4" character varying(255) COLLATE pg_catalog."default",
    "strMeasure5" character varying(255) COLLATE pg_catalog."default",
    "strMeasure6" character varying(255) COLLATE pg_catalog."default",
    "strMeasure7" character varying(255) COLLATE pg_catalog."default",
    "strMeasure8" character varying(255) COLLATE pg_catalog."default",
    "strMeasure9" character varying(255) COLLATE pg_catalog."default",
    "strMeasure10" character varying(255) COLLATE pg_catalog."default",
    "strMeasure11" character varying(255) COLLATE pg_catalog."default",
    "strMeasure12" character varying(255) COLLATE pg_catalog."default",
    "strMeasure13" character varying(255) COLLATE pg_catalog."default",
    "strMeasure14" character varying(255) COLLATE pg_catalog."default",
    "strMeasure15" character varying(255) COLLATE pg_catalog."default",
    "strImageSource" character varying(255) COLLATE pg_catalog."default",
    "strImageAttribution" character varying(255) COLLATE pg_catalog."default",
    "strCreativeCommonsConfirmed" character varying(255) COLLATE pg_catalog."default",
    "dateModified" timestamp without time zone,
    CONSTRAINT cocktails_pkey PRIMARY KEY ("idDrinK")
)
  COMMIT;
EOSQL