const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  await saveOrphanage(db, {
    lat: "-30.05785534",
    lng: "-51.172398",
    name: "Fabiana Anjo de Luz",
    about:
        "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
      whatsapp: "55999992222",
      images: [
        "https://i.imgur.com/KnVaJH9.png",

        "https://system.soprojetos.com.br/files/615/project_page_e/casa_popular_cod100_2quartos.jpg?1491510183"
      ].toString(),
      instructions:
        "Venha como se sentir a vontade e traga muito amor e paciência para dar",
      opening_hours: "Horário de visitas Das 18h até 8h",
      open_on_weekends: "0",
  });


  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

  const orphanages = await db.all('SELECT * FROM orphanages WHERE id = "1"');
  console.log(orphanages);

  // console.log(await db.run("DELETE FROM orphanages WHERE id = '2'"))
});
