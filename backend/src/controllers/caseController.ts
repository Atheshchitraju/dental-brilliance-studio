import { Request, Response } from "express";
import Case from "../models/Case";

export const createCase = async (req: Request, res: Response) => {
  try {
    const newCase = await Case.create(req.body);

    res.status(201).json({
      success: true,
      data: newCase,
    });
  } catch (error: any) {
  res.status(500).json({
    success: false,
    message: error.message,
  });
}
};

export const getCases = async (req: Request, res: Response) => {
  try {
    const cases = await Case.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: cases,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch cases",
    });
  }
};
export const updateCaseStatus = async (req: Request, res: Response) => {
  try {
    const updatedCase = await Case.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      data: updatedCase,
    });
  }catch (error: any) {
  res.status(500).json({
    success: false,
    message: error.message,
  });
}
};