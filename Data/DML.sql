INSERT INTO public."user"(
	id, username, name, password)
	VALUES 
	(1, 'ElBicho', 'Cristiano Ronaldo', 'BICHO123'),
	(2, 'LaBichota', 'Karol G 😳👌', 'BICHOTA123'),
	(3, 'Wil', 'Wilfredo Alfaro', 'WIL123'),
	(4, 'Caroline', 'Caroline Sierra', 'CAROLINE123'),
	(5, 'Nestor', 'Nestor Nieto', 'NESTOR'),
	(6, 'Carolina', 'Carolina Carranza', 'CARO123')
	;

  INSERT INTO public.admin(
	user_id, dui, nit, phone_number)
	VALUES 
  (1, '24454312-2', '24454312-2', '2257-7777'),
	(2, '352321244-2', '352321244-2', '2273-6000')
	;

  INSERT INTO public.pupuseria(
	id, name, id_admin)
	VALUES 
	(1, 'SIUUUUU Pupuseria', 1),
	(2, 'Pupuseria San Vicente', 2)
	;

  INSERT INTO public.branch(
	id, name, address, opening_date, id_pupuseria)
	VALUES 
	(1, 'Galerias', 'Galerias centro comercial, subis las escaleras y a la par del food court tenes una tienda de zapatos, te vas enfrente y ahi está un vigilante, él te da la dirección', CURRENT_TIMESTAMP, 1),
	(2, 'Cojutepeque', 'Pues en cojute', CURRENT_TIMESTAMP, 1),
	(3, 'Santa Elena', 'A la par del priceSmart', CURRENT_TIMESTAMP, 2)
	;

  INSERT INTO public.employee(
	user_id, salary, afp_accumulated, isss_accumulated, rent_accumulated, hiring_date, branch_id)
	VALUES 
	(3, 400.00, 0, 0, 0, CURRENT_TIMESTAMP, 1),
	(4, 400.00, 0, 0, 0, CURRENT_TIMESTAMP, 1),
	(5, 400.00, 0, 0, 0, CURRENT_TIMESTAMP, 2),
	(6, 400.00, 0, 0, 0, CURRENT_TIMESTAMP, 3)
	;

  INSERT INTO public.purchase(
	id, purchase_date, concept, amount, id_branch)
	VALUES 
	(1, CURRENT_TIMESTAMP, '10 libras de frijoles', 5.55, 1),
	(2, CURRENT_TIMESTAMP, '2 cajas de pilsener', 18.50, 1),
	(3, CURRENT_TIMESTAMP, '20 tomates', 4.00, 2),
	(4, CURRENT_TIMESTAMP, '8 mesas nuevas', 1200, 2),
	(5, CURRENT_TIMESTAMP, 'Licuadora Turbo 3000', 120, 3),
	(6, CURRENT_TIMESTAMP, '1 recarga claro', 5.00, 3)
	;

  INSERT INTO public.report(
	id, comment, report_date, id_admin, id_employee)
	VALUES 
	(1, 'Ella eh callaitaaaaaaaah', CURRENT_TIMESTAMP, 1, 4),
	(2, 'Integre los JWT Porfa', CURRENT_TIMESTAMP, 1, 3),
	(3, 'Comprame un dolar de tomates para hoy en la noche', CURRENT_TIMESTAMP, 2, 6),
	(4, 'Ola k tal?', CURRENT_TIMESTAMP, 2, 6)
	;