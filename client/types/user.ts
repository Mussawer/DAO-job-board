import { PrimaryKey, WithTimestamp } from './common';

export type User = PrimaryKey & {
  avatar_url?: string;
  cover_photo_url?: string;
  nonce?: string;
  email: string;
  username?: string;
  preferences?: string;
  disabled_at?: Date;
} & WithTimestamp;

export type UserKeyword = {
  user_id: string;
  category_id: string;
} & WithTimestamp;

export type UserForm = Pick<
  User,
  'avatar_url' | 'cover_photo_url' | 'email' | 'username' | 'preferences'
>;
