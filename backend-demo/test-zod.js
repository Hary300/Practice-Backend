// const { z } = require('zod');

// const userSchema = z.object({
//   name: z.string(),
//   email: z.string(),
// });

// const result = userSchema.safeParse({
//   name: 'Hary',
//   email: 'hary@gmail.com',
// });

// // const result2 = userSchema.safeParse({
// //   name: 1234,
// //   email: 'hary@gmail.com',
// // });

// console.dir(result);

const { z } = require('zod');

const useSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
});

const result = useSchema.safeParse({
  name: '',
  email: 'abc',
});

console.log(result);
