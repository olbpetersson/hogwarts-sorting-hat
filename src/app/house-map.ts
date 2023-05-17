type House = {
  descriptions: string[];
};

export const houseMap: Record<string, House> = {
  Slytherin: {
    descriptions: [
      `Aah, a person who enjoys the anti hero every now and then. I could definitely see you fitting right in. Allright, let's go...

Slytherin it is!`,
      `Bah, thinking you are one of ruthless, evil, cool kids? Nah, you are definitely

...a Hufflepuff!`,
    ],
  },
  Gryffindor: {
    descriptions: [
      `So you think you are one of the good ones do you. Now, would a good one consider themself a good one?

        ..Slytherin!`,
      `So you are calling yourself brave, courageous and determined? Someone who would give themself those attributes must be


...a Slytherin!`,
    ],
  },
  Ravenclaw: {
    descriptions: [
      `You consider yourself clever? Just a little bit wiser, and more intelligent than everyone else? I see what I see

... a Slytherin!`,
      `You are smart enought to understand where I'm going to place you

... a Slytherin!`,
    ],
  },
  Hufflepuff: {
    descriptions: [
      `You know what? I like you! You are definitely on point here

... here's to you being the least gullible Hufflepuff that ever existed!`,
      `The house of modesty. Yeah, you seem like someone who would never be the true hero of any story. You must be...

... a Hufflepuff!`,
    ],
  },
};

export const getIconUrl = (description: string): string => {
  return description.indexOf("slytherin") > 1
    ? "/slythering.png"
    : "/hufflepuff.png";
};
