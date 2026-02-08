import { z } from 'zod';

export const UserPreferencesSchema = z
  .object({
    dietaryPreferences: z
      .array(
        z.enum([
          'vegetarian',
          'vegan',
          'gluten-free',
          'dairy-free',
          'keto',
          'paleo',
          'low-carb',
          'halal',
          'kosher',
        ]),
      )
      .optional()
      .default([]),
    intolerances: z
      .array(
        z.enum([
          'gluten',
          'lactose',
          'nuts',
          'shellfish',
          'eggs',
          'soy',
          'fish',
          'peanuts',
        ]),
      )
      .optional()
      .default([]),
    dislikedIngredients: z.array(z.cuid()).optional().default([]),
    maxPricePerMeal: z.number().positive().optional().nullable(),
  })
  .optional()
  .nullable();

export type UserPreferencesType = z.infer<typeof UserPreferencesSchema>;

export const UserSchema = z.object({
  id: z.cuid(),
  email: z.email(),
  preferences: UserPreferencesSchema,
  weeklyBudget: z.number().optional().nullable(),
});

export type UserType = z.infer<typeof UserSchema>;
