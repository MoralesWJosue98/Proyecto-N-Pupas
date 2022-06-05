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

CREATE SEQUENCE IF NOT EXISTS public.product_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

CREATE TABLE IF NOT EXISTS public.product
(
    id integer NOT NULL DEFAULT nextval('product_id_seq'::regclass),
    name character varying COLLATE pg_catalog."default" NOT NULL,
    price money NOT NULL,
    type character varying COLLATE pg_catalog."default" NOT NULL,
    id_pupuseria integer NOT NULL,
    CONSTRAINT pk_product PRIMARY KEY (id),
    CONSTRAINT fk_product_pupuseria_id FOREIGN KEY (id_pupuseria)
        REFERENCES public.pupuseria (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

CREATE SEQUENCE IF NOT EXISTS public.branch_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

CREATE TABLE IF NOT EXISTS public.branch
(
    id integer NOT NULL DEFAULT nextval('branch_id_seq'::regclass),
    name character varying COLLATE pg_catalog."default" NOT NULL,
    address character varying COLLATE pg_catalog."default" NOT NULL,
    opening_date timestamp without time zone NOT NULL,
    id_pupuseria integer NOT NULL,
    CONSTRAINT pk_branch PRIMARY KEY (id),
    CONSTRAINT fk_branch_pupuseria_id FOREIGN KEY (id_pupuseria)
        REFERENCES public.pupuseria (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

CREATE TABLE IF NOT EXISTS public.employee
(
    user_id integer NOT NULL,
    salary money NOT NULL,
    afp_accumulated money NOT NULL,
    isss_accumulated money NOT NULL,
    rent_accumulated money NOT NULL,
    hiring_date timestamp without time zone NOT NULL,
    CONSTRAINT employee_pkey PRIMARY KEY (user_id),
    CONSTRAINT fk_user_employee_user_id FOREIGN KEY (user_id)
        REFERENCES public."user" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

CREATE SEQUENCE IF NOT EXISTS public.report_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

CREATE TABLE IF NOT EXISTS public.report
(
    id integer NOT NULL DEFAULT nextval('report_id_seq'::regclass),
    comment character varying COLLATE pg_catalog."default" NOT NULL,
    report_date timestamp without time zone NOT NULL,
    id_admin integer NOT NULL,
    id_employee integer NOT NULL,
    CONSTRAINT report_pkey PRIMARY KEY (id),
    CONSTRAINT fk_report_admin_id FOREIGN KEY (id_admin)
        REFERENCES public.admin (user_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_report_employee_id FOREIGN KEY (id_employee)
        REFERENCES public.employee (user_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

CREATE SEQUENCE IF NOT EXISTS public.purchase_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

CREATE TABLE IF NOT EXISTS public.purchase
(
    id integer NOT NULL DEFAULT nextval('purchase_id_seq'::regclass),
    purchase_date timestamp without time zone NOT NULL,
    concept character varying COLLATE pg_catalog."default" NOT NULL,
    amount money NOT NULL,
    id_branch integer NOT NULL,
    CONSTRAINT pk_purchase PRIMARY KEY (id),
    CONSTRAINT fk_purchase_branch_id FOREIGN KEY (id_branch)
        REFERENCES public.branch (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

CREATE SEQUENCE IF NOT EXISTS public.sale_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1
    OWNED BY sale.id;

CREATE TABLE IF NOT EXISTS public.sale
(
    id integer NOT NULL DEFAULT nextval('sale_id_seq'::regclass),
    sale_date timestamp without time zone NOT NULL,
    id_branch integer NOT NULL,
    CONSTRAINT pk_sale PRIMARY KEY (id),
    CONSTRAINT fk_sale_branch_id FOREIGN KEY (id_branch)
        REFERENCES public.branch (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

CREATE SEQUENCE IF NOT EXISTS public.sales_detail_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

CREATE TABLE IF NOT EXISTS public.sales_detail
(
    id integer NOT NULL DEFAULT nextval('sales_detail_id_seq'::regclass),
    amount integer NOT NULL,
    total money NOT NULL,
    id_sale integer NOT NULL,
    id_product integer NOT NULL,
    CONSTRAINT pk_sales_detail PRIMARY KEY (id),
    CONSTRAINT fk_sales_detail_id_product FOREIGN KEY (id_product)
        REFERENCES public.product (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_sales_detail_id_sale FOREIGN KEY (id_sale)
        REFERENCES public.sale (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);