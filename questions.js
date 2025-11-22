// const passages = [
//   {
//     id: 1,
//     title: "Writing Today",
//     text: `In my former life, I often taught first-year composition: a course that supposedly taught students the writing skills they needed for college. The main focus of the course was the college essay.

// Now, freshmen usually had no difficulty with the form of the essay; they just struggled with the content. Grammar issues aside — these would usually work themselves out during the term — the main focus would be composing an argument in a logical way.

// This fact usually separates the high-school essay from the college one: the amount of analysis devoted to an argument.`,
//   },

//   {
//     id: 2,
//     title: "Chemical Substance",
//     text: `Chemical substances (also called pure substances) may well be defined as "any material with a definite chemical composition". According to this definition, a chemical substance can either be a pure chemical element or a pure chemical compound.

// But there are exceptions to this definition; a pure substance can also be defined as a form of matter that has both definite composition and distinct properties. The chemical substance index published by CAS also includes several alloys of uncertain composition.

// Non-stoichiometric compounds are a special case (in inorganic chemistry) that violate the law of constant composition, and for them, it is sometimes difficult to draw the line between a mixture and a compound, as in the case of palladium hydride.`,
//   }
// ];

// const questions = [
//   {
//     number: 1,
//     question: "The most standard and acceptable structure",
//     options: [
//       "A. The lady likes singing and cooking.",
//       "B. The lady likes singing and to cook.",
//       "C. The lady likes to always sing and cooking.",
//       "D. The lady likes singing and to be cooking.",
//     ],
//     answer: "A",
//   },

//   {
//     number: 2,
//     question: "The most standard and acceptable structure",
//     options: [
//       "A. Dr Ogunmola admires people with character and who seem to have integrity.",
//       "B. Dr Ogunmola admires people who have character as well as people with integrity.",
//       "C. Dr Ogunmola admires people who have character and integrity.",
//       "D. Dr Ogunmola admires people with character and who have integrity.",
//     ],
//     answer: "C",
//   },

//   {
//     number: 3,
//     question: "The most standard and acceptable structure",
//     options: [
//       "A. I like to listen, to speak, to read and to do some writing.",
//       "B. I like listening, speaking, reading and writing.",
//       "C. I like listening, speaking, to read, and do writing.",
//       "D. I like listening, speaking, reading, writing.",
//     ],
//     answer: "B",
//   },

//   {
//     number: 4,
//     question: "The most standard and acceptable structure",
//     options: [
//       "A. He was bruised for our iniquities and crushed for our transgressions.",
//       "B. He showed forgiveness for our iniquities; he was crushed for our transgressions.",
//       "C. He was bruised for our iniquities, and they were crushing him for all our transgressions.",
//       "D. He was bruised for our iniquities and was also to be crushed for our transgressions.",
//     ],
//     answer: "A",
//   },

//   {
//     number: 5,
//     question: "The most standard and acceptable structure",
//     options: [
//       "A. The writing of a good student should be precise and original.",
//       "B. The writing of a good student should be precise and show originality.",
//       "C. The writing of a good student should be full of precision and be original.",
//       "D. The writing of a good student should be full of precision and originally correct.",
//     ],
//     answer: "A",
//   },

//   {
//     number: 6,
//     question: "The most standard and acceptable structure",
//     options: [
//       "A. The king was flattered by the chiefs, his family praised him but the people hated him.",
//       "B. The king was flattered by the chiefs, praised by his family but the people hated him.",
//       "C. The king was flattered by the chiefs, praised by his family but hated by the people.",
//       "D. The king’s chiefs flattered him, praised by his family but hated by the people.",
//     ],
//     answer: "C",
//   },

//   {
//     number: 7,
//     question: "The most standard and acceptable structure",
//     options: [
//       "A. Industry is good but to be lazy is bad.",
//       "B. Industry is good but laziness is bad.",
//       "C. Industry is good but being lazy is bad.",
//       "D. Industry is good but doing something lazily is bad.",
//     ],
//     answer: "B",
//   },

//   {
//     number: 8,
//     question: "The most standard and acceptable structure",
//     options: [
//       "A. Yesterday, I went to school, shopped at Idea Konsult and lunched at Tantalizers.",
//       "B. Yesterday, I went to school, shopping at Idea Konsult and lunched at Tantalizers.",
//       "C. Yesterday, I went to school, shopped at Idea Konsult and lunching at Tantalizers.",
//       "D. Yesterday, I went to school, shopped at Idea Konsult and eating at Tantalizers.",
//     ],
//     answer: "A",
//   },

//   {
//     number: 9,
//     question: "The most standard and acceptable structure",
//     options: [
//       "A. The prophet predicted that he would become governor; that he would meet a beautiful stranger and that his first son would become president.",
//       "B. The prophet predicted that he would become governor; a beautiful stranger will meet him and that his first son would become president.",
//       "C. The prophet predicted that he would become governor; he would meet a beautiful stranger; his first son would become president.",
//       "D. The prophet predicted that he would become governor; a beautiful stranger will meet him; his son, to become a future president.",
//     ],
//     answer: "A",
//   },

//   {
//     number: 10,
//     question: "The most standard and acceptable structure",
//     options: [
//       "A. I was writing the letter when she lays the table for breakfast.",
//       "B. I was writing the letter when she laid the table for breakfast.",
//       "C. I was writing the letter while she lay the table for breakfast.",
//       "D. I was writing the letter while she was laying the table for breakfast.",
//     ],
//     answer: "D",
//   },

//   {
//     number: 11,
//     question: "The most standard and acceptable structure",
//     options: [
//       "A. The girl was asked to buy some fish and that she should return to the village.",
//       "B. The girl was asked to buy some fish and then to return to the village.",
//       "C. The girl was asked to buy some fish and then, return back to the village.",
//       "D. The girl was asked to buy some fish and ordered, 'go back to the village'.",
//     ],
//     answer: "B",
//   },

//   {
//     number: 12,
//     question: "The most standard and acceptable structure",
//     options: [
//       "A. Saying is one thing; to do it is another.",
//       "B. Saying is one thing; doing is another.",
//       "C. Saying is one thing; to have done it is another.",
//       "D. Saying is one thing, do it is another.",
//     ],
//     answer: "B",
//   },

//   {
//     number: 13,
//     question: "The most standard and acceptable structure",
//     options: [
//       "A. What Ade needs is a doctor and rest cure.",
//       "B. What Ade needs is a doctor and to rest cure.",
//       "C. What Ade needs is a doctor and a rest cure.",
//       "D. What Ade needs is a doctor and enough rest cure.",
//     ],
//     answer: "C",
//   },

//   {
//     number: 14,
//     question: "The most standard and acceptable structure",
//     options: [
//       "A. He believes that courage is better than fear, and that faith is truer than doubt.",
//       "B. He believes that courage is better than fearing and that faith is truer than doubt.",
//       "C. He believes that courage is better than fear and that faithfulness is truer than to doubt.",
//       "D. He believes that courage is better than fear and that faith is truer than doubting.",
//     ],
//     answer: "A",
//   },

//   {
//     number: 15,
//     question: "The most standard and acceptable structure",
//     options: [
//       "A. The man was not only a politician in a skilful way but also an able artist.",
//       "B. The man was not only a skilful politician but also an art man.",
//       "C. The man was not only a politician skilfully but also an able artist.",
//       "D. The man was not only a skilful politician but also an able artist.",
//     ],
//     answer: "D",
//   },

//   {
//     number: 16,
//     question: "The most standard and acceptable structure",
//     options: [
//       "A. When Bayo grows up, either he wants to be a business tycoon or actor.",
//       "B. Bayo wants to be either a business tycoon or an actor when he grows up.",
//       "C. Bayo wants to be either a business tycoon or do acting job when he grows up.",
//       "D. Bayo wants to be either a business tycoon or act on stage when he grows up.",
//     ],
//     answer: "B",
//   },

//   {
//     number: 17,
//     question: "The most standard and acceptable structure",
//     options: [
//       "A. They could not decide whether to go to church or travelling.",
//       "B. They could not decide whether to go to church or to begin travelling.",
//       "C. They could not decide whether to go to church or to travel.",
//       "D. They could not decide whether going to church or to travel.",
//     ],
//     answer: "C",
//   },

//   {
//     number: 18,
//     question: "The most standard and acceptable structure",
//     options: [
//       "A. She swam with swiftness and gracefully.",
//       "B. She swam swiftly and gracefully.",
//       "C. She swam swiftly and with grace.",
//       "D. She swam swiftly and with much graciousness.",
//     ],
//     answer: "B",
//   },

//   {
//     number: 19,
//     question: "The most standard and acceptable structure",
//     options: [
//       "A. The man closed the door, opened the windows and threw himself on the couch.",
//       "B. The man closed the door, opened the windows and was wanting to throw himself on the couch.",
//       "C. The man closed the door, was opening the windows and threw himself on the couch.",
//       "D. The man was closing the door, was opening the windows and threw himself on the couch.",
//     ],
//     answer: "A",
//   },

//   {
//     number: 20,
//     question: "The most standard and acceptable structure",
//     options: [
//       "A. The manager was asked to write his report quickly, accurately and with thoroughness.",
//       "B. The manager was asked to write his report quickly, accurately and thoroughly.",
//       "C. The manager was asked to write his report quickly, with accuracy and thoroughly.",
//       "D. The manager was asked to write his report quickly, with accuracy and with thoroughness.",
//     ],
//     answer: "B",
//   },

//   {
//     number: 21,
//     question: "The most standard and acceptable structure",
//     options: [
//       "A. The woman advised the boys to get a lot of sleep and to eat little.",
//       "B. The woman advised the boys to get a lot of sleep and that they should not eat much.",
//       "C. The woman advised the boys that they should get a lot of sleep and to eat little.",
//       "D. The woman advised the boys that they should get a lot of sleep and not to be eating much.",
//     ],
//     answer: "A",
//   },

//   {
//     number: 22,
//     question: "The most standard and acceptable structure",
//     options: [
//       "A. The dictionary can be used to find word meanings, pronunciations and looking up spellings.",
//       "B. The dictionary can be used to find: word meanings, checking how to pronounce words and spellings.",
//       "C. The dictionary can be used to find word meanings, pronunciations and to check for spellings.",
//       "D. The dictionary can be used to find word meanings, pronunciations and spellings.",
//     ],
//     answer: "D",
//   },

//   {
//     number: 23,
//     question: "The most standard and acceptable structure",
//     options: [
//       "A. Mr Johnson bought a car for his wife and gave it to her on her birthday.",
//       "B. Mr Johnson bought a car for his wife to give her on her birthday.",
//       "C. Mr Johnson bought a car for his wife and would like to have it given to her on her birthday.",
//       "D. Mr Johnson bought a car for his wife, gave it to her on her birthday.",
//     ],
//     answer: "A",
//   },

//   {
//     number: 24,
//     question: "The most standard and acceptable structure",
//     options: [
//       "A. He was given the flag after he was taking the oath.",
//       "B. He was given the flag after he had taken the oath.",
//       "C. He was giving the flag after taking the oath.",
//       "D. He was given the flag after he takes the oath.",
//     ],
//     answer: "B",
//   },

//   {
//     number: 25,
//     question: "The most standard and acceptable structure",
//     options: [
//       "A. James loves to eat rice on Sundays and to eat beans only on Saturdays.",
//       "B. James loves eating rice on Sundays and to eat beans only on Saturdays.",
//       "C. James loves to be eating rice on Sundays and eat beans only on Saturdays.",
//       "D. James loves to have to eat rice on Sundays and eating beans only on Saturdays.",
//     ],
//     answer: "A",
//   },

//   {
//     number: 26,
//     question:
//       "No one sees one, but all see the other. (What does 'one' refer to?)",
//     options: [
//       "A. physical growth.",
//       "B. growth.",
//       "C. spiritual growth.",
//       "D. spirit growth.",
//     ],
//     answer: "C",
//   },

//   {
//     number: 27,
//     question: "Jordan just bought a fridge. The door fell down.",
//     options: [
//       "A. The door of the house.",
//       "B. The door of the fridge.",
//       "C. The door being repaired.",
//       "D. The door just repaired.",
//     ],
//     answer: "B",
//   },

//   {
//     number: 28,
//     question: "Ronke: I know the meaning of 'voodoo'. Verena: I do too.",
//     options: [
//       "A. know.",
//       "B. know it.",
//       "C. know the meaning of the word 'voodoo'.",
//       "D. will know.",
//     ],
//     answer: "C",
//   },

//   {
//     number: 29,
//     question:
//       "People condemned him for the incest than for the rest. (Which act?)",
//     options: [
//       "A. Sleeping with his neighbour.",
//       "B. Sleeping with his secretary.",
//       "C. Sleeping with his niece.",
//       "D. Sleeping with his guard’s daughter.",
//     ],
//     answer: "C",
//   },

//   {
//     number: 30,
//     question: "Philistinism is more important here.",
//     options: [
//       "A. Coping with a war-bent society.",
//       "B. Dealing with individuals who do not like music.",
//       "C. Not like music.",
//       "D. A war-bent society.",
//     ],
//     answer: "B",
//   },

//   {
//     number: 31,
//     question: "Tell me your plans, and I will give you some money.",
//     options: [
//       "A. When you have done so.",
//       "B. After you have told me your plans.",
//       "C. After you have let me know your plans.",
//       "D. If you let me know your plans.",
//     ],
//     answer: "B",
//   },

//   {
//     number: 32,
//     question: "Insert the disk into the player. Then press the play button.",
//     options: [
//       "A. In the course of that.",
//       "B. After that.",
//       "C. If you have done that.",
//       "D. Do it and after that.",
//     ],
//     answer: "B",
//   },

//   {
//     number: 33,
//     question: "He said 'I will marry you if you want'.",
//     options: [
//       "A. I will marry you.",
//       "B. If.",
//       "C. If you want.",
//       "D. If you prefer that I marry you.",
//     ],
//     answer: "C",
//   },

//   {
//     number: 34,
//     question:
//       "This examination is meant to determine the level of English competence.",
//     options: [
//       "A. This examination.",
//       "B. Conducting the examination.",
//       "C. Determining the English Language competence of applicants.",
//       "D. Conducting this examination for applicants.",
//     ],
//     answer: "C",
//   },

//   {
//     number: 35,
//     question: "No one denies that.",
//     options: [
//       "A. The fact that the university is the best.",
//       "B. The fact that UI is the first and the best.",
//       "C. The fact that the University of Ibadan is the first and best.",
//       "D. The fact that the University of Ibadan is the first and the best University in Nigeria.",
//     ],
//     answer: "D",
//   },

//   {
//     number: 36,
//     question: "Discourse analysis...",
//     options: [
//       "A. The study of language.",
//       "B. Discourse studies.",
//       "C. Discourse analysis.",
//       "D. Language function.",
//     ],
//     answer: "C",
//   },

//   {
//     number: 37,
//     question: "I am presently in South Africa. I like it.",
//     options: [
//       "A. South Africa.",
//       "B. Life in South Africa.",
//       "C. Eating.",
//       "D. Being in South Africa.",
//     ],
//     answer: "A",
//   },

//   {
//     number: 38,
//     question: "Laide, why did you take her money? That’s shameful.",
//     options: [
//       "A. Taking her money.",
//       "B. Stealing her money.",
//       "C. Keeping her money.",
//       "D. Seizing her money.",
//     ],
//     answer: "A",
//   },

//   {
//     number: 39,
//     question: "Choose the formal option.",
//     options: [
//       "A. He wasn’t a member of the committee.",
//       "B. He was not a member of the committee.",
//       "C. He was’nt a member of the committee.",
//       "D. He was not member of the committee.",
//     ],
//     answer: "B",
//   },

//   {
//     number: 40,
//     question: "Choose the appropriate formal expression.",
//     options: [
//       "A. The Vice-chancellor was not on seat.",
//       "B. The Vice Chancellor was not available in the office.",
//       "C. The Vice-chancellor was not present in the office.",
//       "D. The Vice Chancellor was not in his seat.",
//     ],
//     answer: "B",
//   },

//   {
//     number: 41,
//     question: "Choose the most appropriate expression",
//     options: [
//       "A. I had a dash for the service.",
//       "B. I had a kickback for the service.",
//       "C. I had a settlement for the service.",
//       "D. I had something for the service.",
//     ],
//     answer: "B",
//   },

//   {
//     number: 42,
//     question: "Choose the appropriate formal expression.",
//     options: [
//       "A. It’s such a comfortable place.",
//       "B. It is such a comfy place.",
//       "C. It’s such a comfy place.",
//       "D. It is such a comfortable place.",
//     ],
//     answer: "D",
//   },

//   {
//     number: 43,
//     question: "Choose the most appropriate expression.",
//     options: [
//       "A. It amounts to putting the hand of the clock back.",
//       "B. It amounts to putting the clock back.",
//       "C. It amounts to putting back the clock.",
//       "D. It amounts to putting the clock backward.",
//     ],
//     answer: "B",
//   },

//   {
//     number: 44,
//     question: "Choose the most appropriate expression",
//     options: [
//       "A. Discourage drinking hot drinks during working hours.",
//       "B. Discourage drinking spirits during working hours.",
//       "C. Discourage drinking tipsy drinks during working hours.",
//       "D. Discourage drinking peppery drinks during working hours.",
//     ],
//     answer: "B",
//   },

//   {
//     number: 45,
//     question: "Choose the correct formal expression.",
//     options: [
//       "A. I seek for approval for the results presented.",
//       "B. I ask for approval for the results presented.",
//       "C. I seek approval of the results presented.",
//       "D. I seek approval for the results presented.",
//     ],
//     answer: "D",
//   },

//   {
//     number: 46,
//     question: "Choose the appropriate formal expression.",
//     options: [
//       "A. I informed the Board about the development.",
//       "B. I told the Board about the development.",
//       "C. I talked to the Board about the development.",
//       "D. I gisted the Board about the development.",
//     ],
//     answer: "A",
//   },

//   {
//     number: 47,
//     question: "Choose the most appropriate expression.",
//     options: [
//       "A. Some of our students were arrested at the beer parlour.",
//       "B. Some of our students were arrested at the pub.",
//       "C. Some of our students were arrested at the drinking joint.",
//       "D. Some of our students were arrested at the drinking place.",
//     ],
//     answer: "B",
//   },

//   {
//     number: 48,
//     question:
//       "Choose the most appropriate expression.",
//     options: [
//       "A. The audience rose on their feet when the commissioner entered the hall.",
//       "B. The audience rose to their feet when the commissioner entered the hall.",
//       "C. The audience rose at their feet when the commissioner entered the hall.",
//       "D. The audience rose for their feet as the commissioner entered the hall.",
//     ],
//     answer: "B",
//   },

//   {
//     number: 49,
//     question: "Choose the correct formal expression.",
//     options: [
//       "A. I spoke with Dr. Lawanson.",
//       "B. I spoke with Dr Lawanson.",
//       "C. I spoke with Dc Lawanson.",
//       "D. I spoke with Doc. Lawanson.",
//     ],
//     answer: "B",
//   },

//   {
//     number: 50,
//     question: "Choose the correct formal title.",
//     options: [
//       "A. Tell Prof. Adewole to see the Vice-chancellor.",
//       "B. Tell Prof. Adewole to see the VC.",
//       "C. Tell Prof. Adewole to see the Vice Chancellor.",
//       "D. Tell Profess Adewole to see the Vice Chancellor.",
//     ],
//     answer: "C",
//   },

//   {
//     number: 51,
//     question: "Choose the correct expression.",
//     options: [
//       "A. I cannot crack my brain over such terrible issues.",
//       "B. I cannot rack my brain over such terrible issues.",
//       "C. I cannot bother my brain over such terrible issues.",
//       "D. I cannot overload my brain over such terrible issues.",
//     ],
//     answer: "B",
//   },

//   {
//     number: 52,
//     question: "Choose the correct expression.",
//     options: [
//       "A. The case will not scale through at the Executive Committee meeting.",
//       "B. The case will not sail through at the Executive Committee meeting.",
//       "C. The case will not scale up at the Executive Committee meeting.",
//       "D. The case will not sail over at the Executive Committee meeting.",
//     ],
//     answer: "B",
//   },

//   {
//     number: 53,
//     question: "Choose the correct formal expression.",
//     options: [
//       "A. The College takes a deep interest in the matter.",
//       "B. The Colleges has interest in the matter.",
//       "C. The College expresses deep interest in the matter.",
//       "D. The College feels deep interest in the matter.",
//     ],
//     answer: "A",
//   },

//   {
//     number: 54,
//     question: "My father is an academician.",
//     options: ["A. academics", "B. academic", "C. academician", "D. academia"],
//     answer: "B",
//   },

//   {
//     number: 55,
//     question: "Those boys have assassinated my character.",
//     options: [
//       "A. injured my name.",
//       "B. spoilt my name.",
//       "C. injured my reputation.",
//       "D. damaged my reputation.",
//     ],
//     answer: "C",
//   },

//   {
//     number: 56,
//     question: "The brain behind the conspiracy has been apprehended.",
//     options: [
//       "A. The main person who caused.",
//       "B. The chief offender in respect of.",
//       "C. The instigator of.",
//       "D. The cause of.",
//     ],
//     answer: "C",
//   },

//   {
//     number: 57,
//     question: "The tree has been burnt to ashes.",
//     options: [
//       "A. burnt fully.",
//       "B. burnt to the ground.",
//       "C. burnt completely.",
//       "D. burnt beyond recognition.",
//     ],
//     answer: "B",
//   },

//   {
//     number: 58,
//     question: "This is a very cheap paper.",
//     options: ["A. simplified", "B. easy", "C. simple", "D. non-complex"],
//     answer: "B",
//   },

//   {
//     number: 59,
//     question: "Chief Owosebi is the cog in the wheel of this club.",
//     options: ["A. craft", "B. clog", "C. encumbrance", "D. disturbance"],
//     answer: "B",
//   },

//   {
//     number: 60,
//     question:
//       "The chief donor has been invited to the high table to make his speech.",
//     options: [
//       "A. podium",
//       "B. raised platform",
//       "C. entitled seat",
//       "D. lectern",
//     ],
//     answer: "A",
//   },

//   {
//     number: 61,
//     question: "It’s strange the reclusive old man now cracks jokes.",
//     options: ["A. talks", "B. makes jokes", "C. uses jokes", "D. smiths jokes"],
//     answer: "B",
//   },

//   {
//     number: 62,
//     question:
//       "My friend is very diplomatic in answering questions from his girlfriend.",
//     options: ["A. careful", "B. tactical", "C. tactful", "D. selective"],
//     answer: "C",
//   },

//   {
//     number: 63,
//     question: "There was a fatal accident at the UI gate last week.",
//     options: ["A. disastrous", "B. serious", "C. deadly", "D. calamitous"],
//     answer: "C",
//   },

//   {
//     number: 64,
//     question: "I like to have bread and fried egg for breakfast.",
//     options: [
//       "A. mixed egg",
//       "B. scrambled egg",
//       "C. shaken egg",
//       "D. omelette",
//     ],
//     answer: "B",
//   },

//   {
//     number: 65,
//     question: "Goodygy lacks home training.",
//     options: [
//       "A. Goodygy is not well trained by her parents.",
//       "B. Goodygy is not well taught.",
//       "C. Goodygy is not well brought up.",
//       "D. Goodygy is not well mentored.",
//     ],
//     answer: "C",
//   },

//   {
//     number: 66,
//     question: "If care is not taken, you may not complete the assignment.",
//     options: [
//       "A. If proper care is not taken.",
//       "B. If proper precautions are not taken.",
//       "C. If you are not careful.",
//       "D. If no precaution is applied.",
//     ],
//     answer: "B",
//   },

//   {
//     number: 67,
//     question: "I was in the manager’s office last week Friday.",
//     options: [
//       "A. last Friday",
//       "B. Friday of last week",
//       "C. Friday week",
//       "D. Friday for last week",
//     ],
//     answer: "A",
//   },

//   {
//     number: 68,
//     question: "My mother put the shoe in a nylon bag.",
//     options: [
//       "A. leather bag",
//       "B. cellophane bag",
//       "C. non-leather bag",
//       "D. synthetic bag",
//     ],
//     answer: "B",
//   },

//   {
//     number: 69,
//     question: "I should enjoy national cake; I am a Nigerian.",
//     options: [
//       "A. national values",
//       "B. national privileges",
//       "C. national advantages",
//       "D. national opportunities",
//     ],
//     answer: "B",
//   },

//   {
//     number: 70,
//     question: "I just picked race when I saw my father.",
//     options: [
//       "A. disappeared",
//       "B. broke into a run",
//       "C. started with a run",
//       "D. decided to run away",
//     ],
//     answer: "B",
//   },

//   {
//     number: 71,
//     question:
//       "God so good, I remember the Standard English word for 'hot drinks'.",
//     options: [
//       "A. I am lucky",
//       "B. I thank my star",
//       "C. Thank God",
//       "D. To God be the glory",
//     ],
//     answer: "C",
//   },

//   {
//     number: 72,
//     question: "Chief Owonikoko as well as his men _________ arrived.",
//     options: ["A. have", "B. has", "C. are", "D. were"],
//     answer: "B",
//   },

//   {
//     number: 73,
//     question: "The man with his wives _________ coming.",
//     options: ["A. were", "B. are", "C. is", "D. been"],
//     answer: "C",
//   },

//   {
//     number: 74,
//     question: "Julius Berger and Associates ________ not employ technicians.",
//     options: ["A. do", "B. does", "C. has", "D. has"],
//     answer: "B",
//   },

//   {
//     number: 75,
//     question: "Either my friends or my brother ________ taken the car out.",
//     options: ["A. have", "B. has", "C. was", "D. were"],
//     answer: "B",
//   },

//   {
//     number: 76,
//     question:
//       "I was still sleeping when the national news _________ this morning.",
//     options: [
//       "A. were broadcasted",
//       "B. was broadcasted",
//       "C. was broadcast",
//       "D. were broadcast",
//     ],
//     answer: "C",
//   },

//   {
//     number: 77,
//     question: "The man, not his workers, ___________ to blame.",
//     options: ["A. are", "B. is", "C. were", "D. them"],
//     answer: "B",
//   },

//   {
//     number: 78,
//     question: "The hunter with the dogs _________ coming.",
//     options: ["A. are", "B. has", "C. is", "D. were"],
//     answer: "C",
//   },

//   {
//     number: 79,
//     question: "His wife and comforter _________ arrived.",
//     options: ["A. have", "B. has", "C. are", "D. were"],
//     answer: "B",
//   },

//   {
//     number: 80,
//     question:
//       "The number of women ________ more than that of men in every society.",
//     options: ["A. are", "B. is", "C. were", "D. been"],
//     answer: "B",
//   },


//   {
//     number: 81,
//     question:
//       "It is on record that more than one person _________ in road accidents in Nigeria every day.",
//     options: ["A. die", "B. dying", "C. dies", "D. dead"],
//     answer: "C",
//   },

//   {
//     number: 82,
//     question: "The ten minutes I spent reading ________ not wasted.",
//     options: ["A. were", "B. was", "C. have", "D. been"],
//     answer: "B",
//   },

//   {
//     number: 83,
//     question: "So far, five days ________ been spent on this job.",
//     options: ["A. has", "B. have", "C. were", "D. haven"],
//     answer: "A",
//   },

//   {
//     number: 84,
//     question:
//       "Either the chief or his wives __________ expected at the meeting.",
//     options: ["A. was", "B. are", "C. is", "D. been"],
//     answer: "B",
//   },

//   {
//     number: 85,
//     question:
//       "The store, in addition to the secretary’s office, ________ damaged.",
//     options: ["A. were", "B. was", "C. are", "D. have"],
//     answer: "B",
//   },

//   {
//     number: 86,
//     question:
//       "The minutes of the meeting _________ adopted without any correction.",
//     options: ["A. was", "B. were", "C. have", "D. been"],
//     answer: "B",
//   },

//   {
//     number: 87,
//     question: "Each boy and girl __________ given an award.",
//     options: ["A. were", "B. was", "C. are", "D. been"],
//     answer: "B",
//   },

//   {
//     number: 88,
//     question: "The new army barracks ________ at Eleyele.",
//     options: ["A. are", "B. is", "C. were", "D. been"],
//     answer: "B",
//   },

//   {
//     number: 89,
//     question: "Either you or I ________ wrong.",
//     options: ["A. is", "B. being", "C. were", "D. am"],
//     answer: "D",
//   },

//   {
//     number: 90,
//     question: "You and I __________ done the best that we could.",
//     options: ["A. have", "B. having", "C. has", "D. am"],
//     answer: "A",
//   },

//   {
//     number: 91,
//     question: "Rice and beans ________ delicious.",
//     options: ["A. are", "B. were", "C. is", "D. being"],
//     answer: "C",
//   },

//   {
//     number: 92,
//     question: "The report ... appears to have been written in a hurry.",
//     options: ["A. appear", "B. appearing", "C. appears", "D. apparently"],
//     answer: "C",
//   },

//   {
//     number: 93,
//     question:
//       "Medical research shows that mumps --- a person only once in a lifetime.",
//     options: ["A. attack", "B. attacks", "C. attacked", "D. attacking"],
//     answer: "B",
//   },

//   {
//     number: 94,
//     question:
//       "None of the respondents --- strongly convinced by the message of the posters.",
//     options: ["A. was", "B. have", "C. were", "D. has"],
//     answer: "A",
//   },

//   {
//     number: 95,
//     question: "Macaroni and cheese --- all I have had today.",
//     options: ["A. are", "B. is", "C. was", "D. were"],
//     answer: "B",
//   },

//   {
//     number: 96,
//     question:
//       "Ms Ayo Obe --- one of those lawyers who --- that the legal system should serve humanity at all times.",
//     options: [
//       "A. remain/believes",
//       "B. remains/believes",
//       "C. remain/believe",
//       "D. remains/believe",
//     ],
//     answer: "D",
//   },

//   {
//     number: 97,
//     question: '"Stay off infidelity; many a home --- being destroyed by it."',
//     options: ["A. have", "B. has", "C. is", "D. are"],
//     answer: "C",
//   },

//   {
//     number: 98,
//     question: "The series of experiments that we conducted --- successful.",
//     options: ["A. was", "B. were", "C. where", "D. might"],
//     answer: "A",
//   },

//   {
//     number: 99,
//     question:
//       "In a civilised country, the police do not stand by and watch people slaughter ---.",
//     options: [
//       "A. themself",
//       "B. themselves",
//       "C. themselves",
//       "D. one another",
//     ],
//     answer: "D",
//   },

//   {
//     number: 100,
//     question:
//       "The truth is Danladi knows the course better than ---, but let this be between you and ---. ",
//     options: ["A. me/I", "B. I/me", "C. I/I", "D. me/me"],
//     answer: "B",
//   },

//   {
//     number: 101,
//     question:
//       "As an intending husband, James --- to show kindness to his fiancée.",
//     options: ["A. supposes", "B. supposed", "C. suppose", "D. is supposed"],
//     answer: "D",
//   },

//   // SPELLING & CAPITALIZATION — 102 to 120

//   {
//     number: 102,
//     question: "Choose the correct spelling.",
//     options: ["A. Prevailent", "B. Prevalient", "C. Prevalent", "D. Privalent"],
//     answer: "C",
//   },

//   {
//     number: 103,
//     question: "Choose the correct spelling.",
//     options: ["A. priviledge", "B. Previlege", "C. Previlege", "D. Privilege"],
//     answer: "D",
//   },

//   {
//     number: 104,
//     question: "Choose the correct spelling.",
//     options: ["A. Gonorhea", "B. Gonoreah", "C. Gonorrhea", "D. Gonoraeh"],
//     answer: "C",
//   },

//   {
//     number: 105,
//     question: "Choose the correct spelling.",
//     options: [
//       "A. Acommodation",
//       "B. Accomodation",
//       "C. Accommodation",
//       "D. Acoommodation",
//     ],
//     answer: "C",
//   },

//   {
//     number: 106,
//     question: "Choose the correct spelling.",
//     options: ["A. Querry", "B. Query", "C. Queri", "D. Quary"],
//     answer: "B",
//   },

//   {
//     number: 107,
//     question: "Choose the correct spelling.",
//     options: ["A. Strenous", "B. Strainuous", "C. Stranuous", "D. Strenuous"],
//     answer: "D",
//   },

//   {
//     number: 108,
//     question: "Choose the correct spelling.",
//     options: ["A. Occassion", "B. Occasion", "C. Ocassion", "D. Ocaassion"],
//     answer: "B",
//   },

//   {
//     number: 109,
//     question: "Choose the correct spelling.",
//     options: ["A. Grievious", "B. Grevus", "C. Greivious", "D. Grievous"],
//     answer: "D",
//   },

//   {
//     number: 110,
//     question: "Choose the correct spelling.",
//     options: ["A. Convinient", "B. Convenient", "C. Convinent", "D. Convinent"],
//     answer: "B",
//   },

//   {
//     number: 111,
//     question: "Choose the correct spelling.",
//     options: [
//       "A. Heamoglobin",
//       "B. Hemoglobine",
//       "C. Hemoglobine",
//       "D. Haemoglobin",
//     ],
//     answer: "D",
//   },

//   {
//     number: 112,
//     question: "Choose the correct spelling.",
//     options: ["A. Greatful", "B. Graetful", "C. Grateful", "D. Graetful"],
//     answer: "C",
//   },

//   {
//     number: 113,
//     question: "Choose the correct spelling.",
//     options: ["A. Arguement", "B. Agurment", "C. Argueiment", "D. Argument"],
//     answer: "D",
//   },

//   {
//     number: 114,
//     question: "Choose the correct spelling.",
//     options: [
//       "A. Maintanance",
//       "B. Maintainance",
//       "C. Maintenance",
//       "D. Maintinance",
//     ],
//     answer: "C",
//   },

//   {
//     number: 115,
//     question: "Choose the correct spelling.",
//     options: ["A. Modern", "B. Mordarn", "C. Mordern", "D. Murdern"],
//     answer: "A",
//   },

//   {
//     number: 116,
//     question: "Choose the correct spelling.",
//     options: [
//       "A. Permmission",
//       "B. Permission",
//       "C. Permision",
//       "D. Permision",
//     ],
//     answer: "B",
//   },

//   {
//     number: 117,
//     question: "Choose the correct spelling.",
//     options: [
//       "A. Michevious",
//       "B. Mischievous",
//       "C. Mischeivious",
//       "D. Mischievious",
//     ],
//     answer: "B",
//   },

//   {
//     number: 118,
//     question: "Choose the correct spelling.",
//     options: ["A. Desentry", "B. Dysentry", "C. Dycentery", "D. Dysentery"],
//     answer: "D",
//   },

//   {
//     number: 119,
//     question: "Choose the correct spelling.",
//     options: ["A. Receive", "B. Recive", "C. Recieve", "D. Recevie"],
//     answer: "A",
//   },

//   {
//     number: 120,
//     question: "Choose the correct capitalization.",
//     options: [
//       "A. Vice-chancellor",
//       "B. Vice Chancellor",
//       "C. Vice-Chancellor",
//       "D. Vice-Chancelor",
//     ],
//     answer: "B",
//   },

//   {
//     number: 121,
//     question: "Choose the correct capitalisation.",
//     options: [
//       "A. south-western Nigeria",
//       "B. south-Western Nigeria",
//       "C. southwestern Nigeria",
//       "D. Southwestern Nigeria",
//     ],
//     answer: "D",
//   },

//   {
//     number: 122,
//     question: "Choose the correct capitalisation.",
//     options: [
//       "A. He is rather lordy",
//       "B. He is rather Lordy",
//       "C. He is rather the lord",
//       "D. He is rather the lordy",
//     ],
//     answer: "A",
//   },

//   {
//     number: 123,
//     question: "Choose the correct capitalisation.",
//     options: [
//       "A. either Christianity or Islam",
//       "B. either christianity or islam",
//       "C. either Christianity or islam",
//       "D. either christianity or Islam",
//     ],
//     answer: "A",
//   },

//   {
//     number: 124,
//     question: "Choose the correct capitalisation.",
//     options: [
//       "A. He is King James, a real king",
//       "B. He is King James, a real King",
//       "C. He is King James, a Real King",
//       "D. He is King James, a Real king",
//     ],
//     answer: "A",
//   },

//   {
//     number: 125,
//     question: "Choose the correct capitalisation.",
//     options: [
//       "A. The Internet is Worldwide",
//       "B. The internet is worldwide",
//       "C. The Internet is worldwide",
//       "D. The internet is Worldwide",
//     ],
//     answer: "C",
//   },

//   {
//     number: 126,
//     passageRef: 1,
//     question: "Writing ___ they needed for college.",
//     options: ["A. skills", "B. prowess", "C. power", "D. system"],
//     answer: "A",
//   },

//   {
//     number: 127,
//     passageRef: 1,
//     question: "Freshmen usually had no ___ with the form of the essay.",
//     options: ["A. hasles", "B. trouble", "C. difficulty", "D. palaver"],
//     answer: "B",
//   },

//   {
//     number: 128,
//     passageRef: 1,
//     question: "They just struggled with the ___.",
//     options: ["A. style", "B. theme", "C. content", "D. subject matter"],
//     answer: "A",
//   },

//   {
//     number: 129,
//     passageRef: 1,
//     question: "The main focus would be ___ an argument in a logical way.",
//     options: ["A. pushing", "B. producing", "C. composing", "D. creating"],
//     answer: "C",
//   },

//   {
//     number: 130,
//     passageRef: 1,
//     question: "The amount of analysis ___ to an argument.",
//     options: ["A. pushed", "B. dictated", "C. alloted", "D. devoted"],
//     answer: "D",
//   },
//   {
//     number: 131,
//     passageRef: 2,
//     question: "Chemical substances (also called pure ___).",
//     options: ["A. materials", "B. substances", "C. elements", "D. purifiers"],
//     answer: "B",
//   },

//   {
//     number: 132,
//     passageRef: 2,
//     question:
//       "A chemical substance can either be a pure chemical element or a pure chemical ___.",
//     options: [
//       "A. compound",
//       "B. sulphur",
//       "C. material",
//       "D. combined compound",
//     ],
//     answer: "A",
//   },

//   {
//     number: 133,
//     passageRef: 2,
//     question: "A pure substance can also be defined as a form of ___.",
//     options: ["A. life", "B. matter", "C. content", "D. chemical"],
//     answer: "B",
//   },

//   {
//     number: 134,
//     passageRef: 2,
//     question: "Non-___ compounds are a special case.",
//     options: ["A. Combined", "B. stoichiometric", "C. physical", "D. chemical"],
//     answer: "B",
//   },

//   {
//     number: 135,
//     passageRef: 2,
//     question:
//       "Non-stoichiometric compounds ___ the law of constant composition.",
//     options: ["A. disobeys", "B. violates", "C. flouts", "D. disregards"],
//     answer: "B",
//   },

//   {
//     number: 136,
//     question: "Ossified is nearly opposite in meaning to ___.",
//     options: [
//       "A. Durable",
//       "B. Dainty",
//       "C. Flexible",
//       "D. Contumacious",
//       "E. Pragmatic",
//     ],
//     answer: "C",
//   },

//   {
//     number: 137,
//     question: "Disingenuous is opposite in meaning to ___.",
//     options: [
//       "A. Transparent",
//       "B. Parched",
//       "C. Blank",
//       "D. Ingratiating",
//       "E. sincere",
//     ],
//     answer: "A",
//   },

//   {
//     number: 138,
//     question: "I felt enervated by the strain of moving.",
//     options: [
//       "A. Idyllic",
//       "B. Grandiose",
//       "C. Decorous",
//       "D. Frustrated",
//       "E. energised",
//     ],
//     answer: "E",
//   },

//   {
//     number: 139,
//     question: "Adeola is very brash and unprepossessing.",
//     options: [
//       "A. Ugly",
//       "B. Arrogant",
//       "C. Clever",
//       "D. Didactic",
//       "E. Pleasing",
//     ],
//     answer: "E",
//   },

//   {
//     number: 140,
//     question: "Joyce can be obstreperous at times.",
//     options: [
//       "A. Placid",
//       "B. Stubborn",
//       "C. Raucous",
//       "D. Febrile",
//       "E. Amicable",
//     ],
//     answer: "A",
//   },

//   {
//     number: 141,
//     question: "Periphrastic is almost similar in meaning to ___.",
//     options: [
//       "A. Concise",
//       "B. Circular",
//       "C. Comprehensive",
//       "D. Ardent",
//       "E. Junior",
//     ],
//     answer: "B",
//   },

//   {
//     number: 142,
//     question: "His walk to the stage was brisk and sprightly.",
//     options: [
//       "A. Nimble",
//       "B. Sluggish",
//       "C. Hurried",
//       "D. Genuine",
//       "E. Energetic",
//     ],
//     answer: "E",
//   },

//   {
//     number: 143,
//     question: "His essays are long and prolix.",
//     options: [
//       "A. Antediluvian",
//       "B. Terse",
//       "C. Belligerent",
//       "D. Wordy",
//       "E. Awkward",
//     ],
//     answer: "D",
//   },

//   {
//     number: 144,
//     question:
//       "Bukola Smith won plaudits for her skillful handling of the research.",
//     options: [
//       "A. Denunciation",
//       "B. Pleasure",
//       "C. Recognition",
//       "D. Disgrace",
//       "E. Diffidence",
//     ],
//     answer: "C",
//   },

//   {
//     number: 145,
//     question: "The soldiers were subjected to desultory fire.",
//     options: [
//       "A. Salacious",
//       "B. Cursory",
//       "C. Assiduous",
//       "D. Random",
//       "E. Asinine",
//     ],
//     answer: "D",
//   },

//   {
//     number: 146,
//     question: "The drug is used for prophylactic purposes.",
//     options: ["A. curative", "B. preventive", "C. recuperative", "D. healing"],
//     answer: "B",
//   },

//   {
//     number: 147,
//     question: "The chairman’s remark is germane to the issue.",
//     options: ["A. redundant", "B. relevant", "C. irrelevant", "D. crucial"],
//     answer: "B",
//   },

//   {
//     number: 148,
//     question: "His loss can no longer be redeemed.",
//     options: ["A. recovered", "B. revamped", "C. reclaimed", "D. reconsidered"],
//     answer: "A",
//   },

//   {
//     number: 149,
//     question: "He has been handicapped by the manager’s comments.",
//     options: ["A. prevented", "B. incapacitated", "C. debarred", "D. stopped"],
//     answer: "B",
//   },

//   {
//     number: 150,
//     question: "The range of options provided is not clear.",
//     options: ["A. limitation", "B. scope", "C. length", "D. breadth"],
//     answer: "B",
//   }
// ];


const questions = [

  // ============================
  // PARALLELISM (10 Questions)
  // ============================
  {
    number: 1,
    question: "The most standard and acceptable structure",
    options: [
      "A. She enjoys reading, to dance and cooking.",
      "B. She enjoys to read, to dance and cooking.",
      "C. She enjoys reading, dancing and cooking.",
      "D. She enjoys to reading, dancing and to cook."
    ],
    answer: "C",
  },

  {
    number: 2,
    question: "The most standard and acceptable structure",
    options: [
      "A. He promised to visit, calling me and bringing gifts.",
      "B. He promised visiting, calling me and bring gifts.",
      "C. He promised to visit, to call me and to bring gifts.",
      "D. He promised to visit, calling and bringing gifts."
    ],
    answer: "C",
  },

  {
    number: 3,
    question: "The most standard and acceptable structure",
    options: [
      "A. The organization aims at training youths, empowering women and to support small businesses.",
      "B. The organization aims at training youths, empowering women and supporting small businesses.",
      "C. The organization aims at training youths, to empower women and support small businesses.",
      "D. The organization aims at training of youths, empowerment of women and support businesses."
    ],
    answer: "B",
  },

  {
    number: 4,
    question: "The most standard and acceptable structure",
    options: [
      "A. My friend said she likes baking cakes, to cook rice and frying meat.",
      "B. My friend said she likes baking cakes, cooking rice and frying meat.",
      "C. My friend said she likes to bake cakes, cooking rice and fry meat.",
      "D. My friend said she likes baking cakes, cooking rice and to fry meat."
    ],
    answer: "B",
  },

  {
    number: 5,
    question: "The most standard and acceptable structure",
    options: [
      "A. He arranged to meet the director, to review the file and meeting the board.",
      "B. He arranged meeting the director, review the file and meet the board.",
      "C. He arranged to meet the director, to review the file and to meet the board.",
      "D. He arranged meeting the director, reviewing the file and to meet the board."
    ],
    answer: "C",
  },

  {
    number: 6,
    question: "The most standard and acceptable structure",
    options: [
      "A. The lecturer said the exam would test grammar, writing and how to read.",
      "B. The lecturer said the exam would test grammar, writing and reading.",
      "C. The lecturer said the exam would test grammar, to write and reading.",
      "D. The lecturer said the exam would test grammar, the writing and the reading."
    ],
    answer: "B",
  },

  {
    number: 7,
    question: "The most standard and acceptable structure",
    options: [
      "A. The boy likes running, to jump and swimming.",
      "B. The boy likes to run, to jump and swimming.",
      "C. The boy likes running, jumping and swimming.",
      "D. The boy likes running, jumping and to swim."
    ],
    answer: "C",
  },

  {
    number: 8,
    question: "The most standard and acceptable structure",
    options: [
      "A. The man closed the window, locked the door and was switching off the light.",
      "B. The man was closing the window, locked the door and switched off the light.",
      "C. The man closed the window, locked the door and switched off the light.",
      "D. The man closes the window, locking the door and switched the light."
    ],
    answer: "C",
  },

  {
    number: 9,
    question: "The most standard and acceptable structure",
    options: [
      "A. The committee agreed to review the policy, implementing changes and to meet stakeholders.",
      "B. The committee agreed reviewing the policy, implementing changes and meeting stakeholders.",
      "C. The committee agreed to review the policy, to implement changes and to meet stakeholders.",
      "D. The committee agreed to review the policy, implementing changes and meeting stakeholders."
    ],
    answer: "C",
  },

  {
    number: 10,
    question: "The most standard and acceptable structure",
    options: [
      "A. We must choose between investing in technology, in training and to improve salaries.",
      "B. We must choose between investing in technology, training and improving salaries.",
      "C. We must choose between technology, training and improve salaries.",
      "D. We must choose between investing in technology, training and to improve salaries."
    ],
    answer: "B",
  },

  // ===================================
  // DISCOURSE REFERENCE (5 Questions)
  // ===================================
  {
    number: 11,
    question: "Identify what the pronoun refers to",
    options: [
      "A. The plan was ambitious. It succeeded.",
      "B. The plan was ambitious. It refers to the proposal.",
      "C. The plan was ambitious. It refers to the ambition.",
      "D. The plan was ambitious. It refers to the planner."
    ],
    answer: "B",
  },

  {
    number: 12,
    question: "Identify the correct reference",
    options: [
      "A. The laptop fell and broke. This upset me.",
      "B. The laptop fell and broke. This refers to the laptop.",
      "C. The laptop fell and broke. This refers to the breaking.",
      "D. The laptop fell and broke. This refers to me."
    ],
    answer: "C",
  },

  {
    number: 13,
    question: "Identify what the underlined word refers to",
    options: [
      "A. She submitted her assignment late. That annoyed her lecturer.",
      "B. That = her assignment",
      "C. That = the lateness",
      "D. That = the lecturer"
    ],
    answer: "C",
  },

  {
    number: 14,
    question: "Identify the correct reference",
    options: [
      "A. John argued with Paul. He later apologized.",
      "B. He = John",
      "C. He = Paul",
      "D. He = both of them"
    ],
    answer: "B",
  },

  {
    number: 15,
    question: "Identify the correct reference",
    options: [
      "A. The protest lasted several hours. This caused a major traffic jam.",
      "B. This = several hours",
      "C. This = the protest",
      "D. This = the traffic jam"
    ],
    answer: "C",
  },

  // ===================================
  // STYLISTIC VARIATION (10 Questions)
  // ===================================
  {
    number: 16,
    question: "Choose the correct formal expression",
    options: [
      "A. The VC is not on seat.",
      "B. The Vice Chancellor is unavailable.",
      "C. The VC is not around.",
      "D. The Vice Chancellor is not on his seat."
    ],
    answer: "B",
  },

  {
    number: 17,
    question: "Choose the correct formal expression",
    options: [
      "A. I gisted him about the matter.",
      "B. I briefed him about the matter.",
      "C. I yarned him about the matter.",
      "D. I told him small small."
    ],
    answer: "B",
  },

  {
    number: 18,
    question: "Choose the correct formal expression",
    options: [
      "A. He received a backhand for the job.",
      "B. He received a settlement for the job.",
      "C. He received a kickback for the job.",
      "D. He collected something small for the job."
    ],
    answer: "C",
  },

  {
    number: 19,
    question: "Choose the correct formal expression",
    options: [
      "A. The staff were caught at the beer parlour.",
      "B. The staff were caught at the pub.",
      "C. The staff were caught at the joint.",
      "D. The staff were caught at the drinking place."
    ],
    answer: "B",
  },

  {
    number: 20,
    question: "Choose the correct formal expression",
    options: [
      "A. The students stood from their seats.",
      "B. The students rose from their seats.",
      "C. The students stood on their feet.",
      "D. The students climbed their seats."
    ],
    answer: "B",
  },

  {
    number: 21,
    question: "Choose the correct formal expression",
    options: [
      "A. He was not in office yesterday.",
      "B. He was not on seat yesterday.",
      "C. He was not available in the office yesterday.",
      "D. He was not around yesterday."
    ],
    answer: "C",
  },

  {
    number: 22,
    question: "Choose the correct formal expression",
    options: [
      "A. The manager cracked his brain over the issue.",
      "B. The manager racked his brain over the issue.",
      "C. The manager stressed his brain over the issue.",
      "D. The manager bothered his brain about the issue."
    ],
    answer: "B",
  },

  {
    number: 23,
    question: "Choose the correct formal expression",
    options: [
      "A. The case will not scale through.",
      "B. The case will not sail through.",
      "C. The case will not pass through.",
      "D. The case will not slip through."
    ],
    answer: "B",
  },

  {
    number: 24,
    question: "Choose the correct formal expression",
    options: [
      "A. This food is very peppery.",
      "B. This food is very spicy.",
      "C. This food is very pepperish.",
      "D. This food is very hot."
    ],
    answer: "B",
  },

  {
    number: 25,
    question: "Choose the correct formal expression",
    options: [
      "A. He is not well trained at home.",
      "B. He lacks home upbringing.",
      "C. He is not well brought up.",
      "D. He is not well mentored."
    ],
    answer: "C",
  },

  // ===================================
  // CONCORD (15 Questions)
  // ===================================
  {
    number: 26,
    question: "Choose the correct option",
    options: [
      "A. Neither of the boys are ready.",
      "B. Neither of the boys is ready.",
      "C. Neither of the boys were ready.",
      "D. Neither of the boys have been ready."
    ],
    answer: "B",
  },

  {
    number: 27,
    question: "Choose the correct option",
    options: [
      "A. The quality of the products are excellent.",
      "B. The quality of the products is excellent.",
      "C. The quality of the products were excellent.",
      "D. The quality of the products have been excellent."
    ],
    answer: "B",
  },

  {
    number: 28,
    question: "Choose the correct option",
    options: [
      "A. One of the students are missing.",
      "B. One of the students were missing.",
      "C. One of the students is missing.",
      "D. One of the students have been missing."
    ],
    answer: "C",
  },

  {
    number: 29,
    question: "Choose the correct option",
    options: [
      "A. Either the lecturer or the students is coming.",
      "B. Either the lecturer or the students are coming.",
      "C. Either the lecturer or the students has come.",
      "D. Either the lecturer or the students being coming."
    ],
    answer: "B",
  },

  {
    number: 30,
    question: "Choose the correct option",
    options: [
      "A. Five litres is enough.",
      "B. Five litres are enough.",
      "C. Five litres being enough.",
      "D. Five litres has been enough."
    ],
    answer: "A",
  },

  {
    number: 31,
    question: "Choose the correct option",
    options: [
      "A. The information were confirmed.",
      "B. The information was confirmed.",
      "C. The informations were confirmed.",
      "D. The information have been confirmed."
    ],
    answer: "B",
  },

  {
    number: 32,
    question: "Choose the correct option",
    options: [
      "A. Mathematics are difficult.",
      "B. Mathematics is difficult.",
      "C. Mathematics were difficult.",
      "D. Mathematics have been difficult."
    ],
    answer: "B",
  },

  {
    number: 33,
    question: "Choose the correct option",
    options: [
      "A. The staff is hardworking.",
      "B. The staff are hardworking.",
      "C. The staffs are hardworking.",
      "D. The staff being hardworking."
    ],
    answer: "B",
  },

  {
    number: 34,
    question: "Choose the correct option",
    options: [
      "A. Twenty kilometers is a long walk.",
      "B. Twenty kilometers are a long walk.",
      "C. Twenty kilometers were a long walk.",
      "D. Twenty kilometers being a long walk."
    ],
    answer: "A",
  },

  {
    number: 35,
    question: "Choose the correct option",
    options: [
      "A. The police is investigating the case.",
      "B. The police are investigating the case.",
      "C. The police has been investigating the case.",
      "D. The police being investigating the case."
    ],
    answer: "B",
  },

  {
    number: 36,
    question: "Choose the correct option",
    options: [
      "A. The pair of shoes are new.",
      "B. The pair of shoes were new.",
      "C. The pair of shoes is new.",
      "D. The pair of shoes being new."
    ],
    answer: "C",
  },

  {
    number: 37,
    question: "Choose the correct option",
    options: [
      "A. Each of the lecturers have submitted their forms.",
      "B. Each of the lecturers has submitted their forms.",
      "C. Each of the lecturers are submitting their forms.",
      "D. Each of the lecturers were submitting their forms."
    ],
    answer: "B",
  },

  {
    number: 38,
    question: "Choose the correct option",
    options: [
      "A. The number of applicants are increasing.",
      "B. The number of applicants is increasing.",
      "C. The number of applicants were increasing.",
      "D. The number of applicants have increased."
    ],
    answer: "B",
  },

  {
    number: 39,
    question: "Choose the correct option",
    options: [
      "A. A number of students is waiting.",
      "B. A number of students was waiting.",
      "C. A number of students are waiting.",
      "D. A number of students has been waiting."
    ],
    answer: "C",
  },

  {
    number: 40,
    question: "Choose the correct option",
    options: [
      "A. Politics are interesting.",
      "B. Politics is interesting.",
      "C. Politics were interesting.",
      "D. Politics being interesting."
    ],
    answer: "B",
  },

  // ===================================
  // VOCABULARY (Synonyms/Antonyms/Meaning)
  // ===================================
  {
    number: 41,
    question: "Choose the option nearest in meaning",
    options: [
      "A. trivial",
      "B. insignificant",
      "C. meaningful",
      "D. impressive"
    ],
    answer: "B",
  },

  {
    number: 42,
    question: "Choose the option nearest in meaning to ‘audacious’",
    options: [
      "A. fearful",
      "B. bold",
      "C. doubtful",
      "D. modest"
    ],
    answer: "B",
  },

  {
    number: 43,
    question: "Choose the option nearest in meaning to ‘candid’",
    options: [
      "A. secretive",
      "B. dishonest",
      "C. honest",
      "D. confused"
    ],
    answer: "C",
  },

  {
    number: 44,
    question: "Choose the option opposite in meaning to 'obstinate'",
    options: [
      "A. stubborn",
      "B. flexible",
      "C. rigid",
      "D. unyielding"
    ],
    answer: "B",
  },

  {
    number: 45,
    question: "Choose the option opposite in meaning to 'mitigate'",
    options: [
      "A. reduce",
      "B. worsen",
      "C. soften",
      "D. lighten"
    ],
    answer: "B",
  },

  {
    number: 46,
    question: "Choose the option closest in meaning to 'affluent'",
    options: [
      "A. poor",
      "B. wealthy",
      "C. average",
      "D. hopeful"
    ],
    answer: "B",
  },

  {
    number: 47,
    question: "Choose the option opposite in meaning to 'reluctant'",
    options: [
      "A. willing",
      "B. tired",
      "C. hesitant",
      "D. confused"
    ],
    answer: "A",
  },

  {
    number: 48,
    question: "Choose the option closest in meaning to 'scrutinize'",
    options: [
      "A. ignore",
      "B. examine",
      "C. guess",
      "D. summarize"
    ],
    answer: "B",
  },

  {
    number: 49,
    question: "Choose the option opposite in meaning to 'explicit'",
    options: [
      "A. clear",
      "B. vague",
      "C. open",
      "D. loud"
    ],
    answer: "B",
  },

  {
    number: 50,
    question: "Choose the option nearest in meaning to 'tedious'",
    options: [
      "A. boring",
      "B. exciting",
      "C. sudden",
      "D. playful"
    ],
    answer: "A",
  },

  // ===================================
  // SPELLING & CAPITALISATION
  // ===================================
  {
    number: 51,
    question: "Choose the correct spelling",
    options: [
      "A. embarras",
      "B. embarrass",
      "C. embarass",
      "D. embaras"
    ],
    answer: "B",
  },

  {
    number: 52,
    question: "Choose the correct spelling",
    options: [
      "A. conveneint",
      "B. convenient",
      "C. conveniant",
      "D. conveenent"
    ],
    answer: "B",
  },

  {
    number: 53,
    question: "Choose the correct spelling",
    options: [
      "A. neccessary",
      "B. necesary",
      "C. necessary",
      "D. nessessary"
    ],
    answer: "C",
  },

  {
    number: 54,
    question: "Choose the correct capitalisation",
    options: [
      "A. The President of nigeria",
      "B. The president of Nigeria",
      "C. The President of Nigeria",
      "D. The president Of nigeria"
    ],
    answer: "C",
  },

  {
    number: 55,
    question: "Choose the correct capitalisation",
    options: [
      "A. He visited the Western part of lagos.",
      "B. He visited the western part of Lagos.",
      "C. He visited the western Part of lagos.",
      "D. He visited the Western part of Lagos."
    ],
    answer: "B",
  },

  {
    number: 56,
    question: "Choose the correct spelling",
    options: [
      "A. ocassion",
      "B. occasion",
      "C. occassion",
      "D. occation"
    ],
    answer: "B",
  },

  {
    number: 57,
    question: "Choose the correct spelling",
    options: [
      "A. reccommend",
      "B. recomend",
      "C. recommend",
      "D. recommened"
    ],
    answer: "C",
  },

  {
    number: 58,
    question: "Choose the correct spelling",
    options: [
      "A. exagerate",
      "B. exagggerate",
      "C. exaggerate",
      "D. exxagerate"
    ],
    answer: "C",
  },

  {
    number: 59,
    question: "Choose the correct capitalisation",
    options: [
      "A. The internet is a global system.",
      "B. The Internet is a global system.",
      "C. The Internet is A Global system.",
      "D. The internet Is a Global System."
    ],
    answer: "B",
  },

  {
    number: 60,
    question: "Choose the correct capitalisation",
    options: [
      "A. He is the Governor of oyo state.",
      "B. He is the governor Of Oyo State.",
      "C. He is the Governor of Oyo State.",
      "D. He is the Governor Of oyo State."
    ],
    answer: "C",
  }

];


window.questions = questions;
// window.passages = passages;