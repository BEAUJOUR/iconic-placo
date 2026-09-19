import { getProjectImage } from "@/lib/projectPhotos";

function projectImage(index: number) {
  return getProjectImage(index) ?? "";
}

export const services = [
  {
    title: "Cloisons et doublages",
    text: "Structurer les volumes, separer les espaces et preparer des supports propres pour vos finitions.",
  },
  {
    title: "Faux plafonds",
    text: "Creer des plafonds techniques, lumineux ou decoratifs avec une execution nette et durable.",
  },
  {
    title: "Isolation interieure",
    text: "Ameliorer le confort thermique et acoustique avec des solutions adaptees aux murs et combles.",
  },
  {
    title: "Bandes et enduits",
    text: "Soigner les raccords, les angles et les surfaces pour une base prete a peindre.",
  },
  {
    title: "Amenagement des combles",
    text: "Transformer les volumes sous pente en pieces utiles, isolees et correctement finies.",
  },
  {
    title: "Finitions sur mesure",
    text: "Realiser niches, habillages, retombees et ouvrages decoratifs avec precision.",
  },
  {
    title: "Peinture interieure",
    text: "Finaliser les pieces avec une peinture interieure propre apres preparation des supports.",
  },
];

export const trustItems = [
  { number: "01", title: "Devis gratuit", text: "Reponse claire" },
  { number: "02", title: "Travail soigne", text: "Finitions precises" },
  { number: "03", title: "Proximite", text: "Ile-de-France" },
];

export const values = [
  {
    number: "01",
    title: "Ecoute et conseil",
    text: "Une solution adaptee a l'espace, pas une reponse standard.",
  },
  {
    number: "02",
    title: "Precision",
    text: "Des alignements, raccords et finitions controles avec attention.",
  },
  {
    number: "03",
    title: "Respect des lieux",
    text: "Protection, organisation et proprete pendant le chantier.",
  },
];

export const methodSteps = [
  {
    title: "Premier echange",
    text: "Vous expliquez le besoin, les contraintes du lieu et le niveau de finition attendu.",
  },
  {
    title: "Visite technique",
    text: "Le support, les dimensions, les acces et les points sensibles sont verifies.",
  },
  {
    title: "Proposition claire",
    text: "Le devis presente les prestations, les materiaux principaux et les delais.",
  },
  {
    title: "Realisation soignee",
    text: "Le chantier avance avec methode jusqu'a une reception propre et lisible.",
  },
];

export const realizations = [
  {
    title: "Cloisons et doublages",
    text: "Ossatures, plaques et volumes restructures avant finitions.",
    image: projectImage(38),
  },
  {
    title: "Faux plafond lumineux",
    text: "Dalles, ossature et reprise technique au plafond.",
    image: projectImage(23),
  },
  {
    title: "Bandes et enduits",
    text: "Murs prepares, surfaces reprises et pieces pretes pour la suite.",
    image: projectImage(11),
  },
];

export const siteImages = {
  hero: projectImage(23),
  about: projectImage(38),
};
