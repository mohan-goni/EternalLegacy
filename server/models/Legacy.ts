import mongoose, { Schema, Document } from 'mongoose';

export interface ILegacy extends Document {
  title: string;
  description: string;
  creator: mongoose.Types.ObjectId;
  recipients: Array<{
    email: string;
    name: string;
    accessGranted: boolean;
  }>;
  media: Array<{
    type: 'image' | 'video' | 'audio';
    url: string;
    publicId: string;
  }>;
  unlockDate?: Date;
  triggerEvent?: string;
  isPublic: boolean;
  isVaultProtected: boolean;
  vaultData?: string;
  notificationSettings: {
    reminderFrequency: 'never' | 'weekly' | 'monthly' | 'yearly';
    lastNotificationSent?: Date;
  };
}

const legacySchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  recipients: [{
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    name: {
      type: String,
      required: true,
    },
    accessGranted: {
      type: Boolean,
      default: false,
    },
  }],
  media: [{
    type: {
      type: String,
      enum: ['image', 'video', 'audio'],
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    publicId: {
      type: String,
      required: true,
    },
  }],
  unlockDate: {
    type: Date,
  },
  triggerEvent: {
    type: String,
  },
  isPublic: {
    type: Boolean,
    default: false,
  },
  isVaultProtected: {
    type: Boolean,
    default: false,
  },
  vaultData: {
    type: String,
  },
  notificationSettings: {
    reminderFrequency: {
      type: String,
      enum: ['never', 'weekly', 'monthly', 'yearly'],
      default: 'never',
    },
    lastNotificationSent: {
      type: Date,
    },
  },
}, {
  timestamps: true,
});

export default mongoose.model<ILegacy>('Legacy', legacySchema);