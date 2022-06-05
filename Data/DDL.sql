CREATE SEQUENCE IF NOT EXISTS public.user_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

CREATE TABLE IF NOT EXISTS public."user"
(
    id integer NOT NULL DEFAULT nextval('user_id_seq'::regclass),
    username character varying COLLATE pg_catalog."default" NOT NULL,
    name character varying COLLATE pg_catalog."default" NOT NULL,
    password character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT user_pkey PRIMARY KEY (id)
);


CREATE TABLE IF NOT EXISTS public.admin
(
    user_id integer NOT NULL,
    dui character varying COLLATE pg_catalog."default" NOT NULL,
    nit character varying COLLATE pg_catalog."default" NOT NULL,
    phone_number character varying(9) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT admin_pkey PRIMARY KEY (user_id),
    CONSTRAINT unique_dui UNIQUE (dui),
    CONSTRAINT fk_admin_user_user_id FOREIGN KEY (user_id)
        REFERENCES public."user" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);

CREATE SEQUENCE IF NOT EXISTS public.pupuseria_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

CREATE TABLE IF NOT EXISTS public.pupuseria
(
    id integer NOT NULL DEFAULT nextval('pupuseria_id_seq'::regclass),
    name character varying COLLATE pg_catalog."default" NOT NULL,
    id_admin integer NOT NULL,
    CONSTRAINT unique_pupuseria_admin_id PRIMARY KEY (id),
    CONSTRAINT fk_pupuseria_admin_id FOREIGN KEY (id_admin)
        REFERENCES public.admin (user_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

