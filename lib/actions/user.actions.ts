"use server"
import { revalidatePath } from "next/cache";
import User from "../database/models/user.model";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";

// CREATE
export async function createUser(user: CreateUserParams) {
  try {
    await connectToDatabase();

    const newUser = await User.create(user);

    return newUser.toJSON();
  } catch (error) {
    handleError(error);
    throw new Error("Failed to create user");
  }
}

// READ
export async function getUserById(userId: string) {
  try {
    await connectToDatabase();

    const user = await User.findOne({ clerkId: userId });

    if (!user) {
      throw new Error("User not found");
    }

    return user.toJSON();
  } catch (error) {
    handleError(error);
    throw new Error("Failed to get user by ID");
  }
}

// UPDATE
export async function updateUser(clerkId: string, user: UpdateUserParams) {
  try {
    await connectToDatabase();

    const updatedUser = await User.findOneAndUpdate({ clerkId }, user, {
      new: true,
    });

    if (!updatedUser) {
      throw new Error("User update failed");
    }

    return updatedUser.toJSON();
  } catch (error) {
    handleError(error);
    throw new Error("Failed to update user");
  }
}

// DELETE
export async function deleteUser(clerkId: string) {
  try {
    await connectToDatabase();

    const userToDelete = await User.findOne({ clerkId });

    if (!userToDelete) {
      throw new Error("User not found");
    }

    const deletedUser = await User.findByIdAndDelete(userToDelete._id);
    revalidatePath("/");

    return deletedUser ? deletedUser.toJSON() : null;
  } catch (error) {
    handleError(error);
    throw new Error("Failed to delete user");
  }
}

// USE CREDITS
export async function updateCredits(userId: string, creditFee: number) {
  try {
    await connectToDatabase();

    const updatedUserCredits = await User.findOneAndUpdate(
      { _id: userId },
      { $inc: { creditBalance: creditFee }},
      { new: true }
    );

    if (!updatedUserCredits) {
      throw new Error("User credits update failed");
    }

    return updatedUserCredits.toJSON();
  } catch (error) {
    handleError(error);
    throw new Error("Failed to update user credits");
  }
}
