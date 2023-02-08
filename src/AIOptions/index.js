export const arrayItems = [
    {
      name: "Q&A",
      id: "q&a",
      description: "Answer questions based on existing knowledge",
      option: {
        model: "text-davinci-003",
        temperature: 0,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      },
    },
    {
      name: "Generate Image",
      id: "generateImage",
      description: "Genarates new images.",
      option: {
        n: 1,
        size: "1024x1024"
      },
    }
];