import fs from "node:fs";
import path from "node:path";
import { assetPath } from "@/lib/assetPath";

export type ProjectPhoto = {
  index: number;
  image: string;
  title: string;
  category: string;
  description: string;
};

const photoMeta: Record<number, Omit<ProjectPhoto, "index" | "image">> = {
  1: { title: "Verriere interieure", category: "Finition interieure", description: "Vue d'ensemble apres intervention et finition d'espace." },
  2: { title: "Preparation du support", category: "Preparation", description: "Mur brut et zone preparee avant doublage." },
  3: { title: "Piece avant doublage", category: "Avant travaux", description: "Etat initial avec supports a reprendre." },
  4: { title: "Support maconnerie", category: "Preparation", description: "Mur brut avant pose de l'ossature." },
  5: { title: "Ossature de doublage", category: "Cloisons et doublages", description: "Montants poses devant le support existant." },
  6: { title: "Ossature de doublage", category: "Cloisons et doublages", description: "Structure prete pour isolation et plaques." },
  7: { title: "Doublage en cours", category: "Cloisons et doublages", description: "Chantier en phase de pose." },
  8: { title: "Mur repris", category: "Bandes et enduits", description: "Surface interieure reprise et unifiee." },
  9: { title: "Ossature et isolant", category: "Isolation interieure", description: "Structure avec isolant integre." },
  10: { title: "Isolation sous ossature", category: "Isolation interieure", description: "Doublage technique avec isolant." },
  11: { title: "Piece en finition", category: "Bandes et enduits", description: "Murs prepares avec enduits et reprises." },
  12: { title: "Piece reprise", category: "Bandes et enduits", description: "Volume propre apres intervention." },
  13: { title: "Murs prepares", category: "Bandes et enduits", description: "Piece prete pour la phase suivante." },
  14: { title: "Angle et retour de mur", category: "Finitions sur mesure", description: "Traitement des volumes et raccords." },
  15: { title: "Passage et retour", category: "Finitions sur mesure", description: "Reprises propres autour des ouvertures." },
  16: { title: "Mur fini", category: "Bandes et enduits", description: "Surface lissee et propre." },
  17: { title: "Plaques et isolant", category: "Cloisons et doublages", description: "Pose de plaques en cours." },
  18: { title: "Support avant doublage", category: "Preparation", description: "Etat brut avant habillage." },
  19: { title: "Verriere et volume fini", category: "Finition interieure", description: "Vue interieure lumineuse apres travaux." },
  20: { title: "Ouverture avant reprise", category: "Preparation", description: "Support a preparer avant amenagement." },
  21: { title: "Dalle de plafond deposee", category: "Faux plafonds", description: "Intervention technique sur plafond suspendu." },
  22: { title: "Plafond suspendu", category: "Faux plafonds", description: "Structure de plafond avec dalles." },
  23: { title: "Faux plafond lumineux", category: "Faux plafonds", description: "Plafond suspendu avec eclairage lineaire." },
  24: { title: "Plafond suspendu en cours", category: "Faux plafonds", description: "Dalles et ossature en ajustement." },
  25: { title: "Cloisons en couloir", category: "Cloisons et doublages", description: "Cloisons et isolation sur zone de circulation." },
  26: { title: "Ossature de cloisons", category: "Cloisons et doublages", description: "Structure metallique avant fermeture." },
  27: { title: "Ossature plafond technique", category: "Faux plafonds", description: "Reseaux et structure avant fermeture." },
  28: { title: "Plafond technique", category: "Faux plafonds", description: "Passage reseaux et ossature." },
  29: { title: "Plaque hydro et plafond", category: "Faux plafonds", description: "Pose technique autour des reseaux." },
  30: { title: "Piece en renovation", category: "Bandes et enduits", description: "Piece en phase de reprise des supports." },
  31: { title: "Spot et plafond fini", category: "Faux plafonds", description: "Finition autour des points lumineux." },
  32: { title: "Reprise de plafond", category: "Faux plafonds", description: "Plaque et raccord avant enduit." },
  33: { title: "Volume fini", category: "Finitions sur mesure", description: "Piece reprise avec finition propre." },
  34: { title: "Trappe et plafond", category: "Faux plafonds", description: "Ouverture technique integree au plafond." },
  35: { title: "Piece en travaux", category: "Bandes et enduits", description: "Reprise murale avant finition." },
  36: { title: "Habillage et passage technique", category: "Finitions sur mesure", description: "Ouvrage interieur autour des reseaux." },
  37: { title: "Piece avec plaques et spots", category: "Finitions sur mesure", description: "Amenagement interieur en cours." },
  38: { title: "Cloison en plaques", category: "Cloisons et doublages", description: "Grand volume ferme avec plaques de platre." },
  39: { title: "Doublage plaque verte", category: "Cloisons et doublages", description: "Habillage mural en plaques techniques." },
  40: { title: "Ossature plafond", category: "Faux plafonds", description: "Structure metallique avant fermeture." },
  41: { title: "Piece reprise", category: "Bandes et enduits", description: "Mur et angle prepares." },
  42: { title: "Reprise technique plafond", category: "Faux plafonds", description: "Ouverture et correction localisee." },
  43: { title: "Reference grand volume", category: "Reference projet", description: "Capture fournie comme reference d'espace a transformer." },
};

const imagesDirectory = path.join(process.cwd(), "public", "images");
const projectFilePattern = /^project-(\d+)\.(jpe?g|png|webp)$/i;

export function imageExists(src: string) {
  const fileName = src
    .replace(new RegExp(`^${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}`), "")
    .replace(/^\/images\//, "");
  return fs.existsSync(path.join(imagesDirectory, fileName));
}

export function getProjectPhotos(): ProjectPhoto[] {
  if (!fs.existsSync(imagesDirectory)) {
    return [];
  }

  return fs
    .readdirSync(imagesDirectory)
    .map((fileName) => ({ fileName, match: fileName.match(projectFilePattern) }))
    .filter((entry): entry is { fileName: string; match: RegExpMatchArray } => Boolean(entry.match))
    .map(({ fileName, match }) => {
      const index = Number(match[1]);
      const meta = photoMeta[index] ?? {
        title: `Photo chantier ${String(index).padStart(2, "0")}`,
        category: "Photo chantier",
        description: "Image ajoutee au dossier projets Iconic P Solution.",
      };

      return {
        index,
        image: assetPath(`/images/${fileName}`),
        ...meta,
      };
    })
    .sort((a, b) => a.index - b.index);
}
