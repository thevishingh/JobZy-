import { Company } from "../models/company.model.js";
import User from "../models/user.model.js";

// Register a new company
export const registerCompany = async (req, res) => {
    try {
        const { name: companyName } = req.body;
        // validate input
        if (!companyName) {
            return res.status(400).json({
                message: "Company name is required",
                success: false,
            });
        }

        // check if company already exists
        const existingCompany = await Company.findOne({ name: companyName });
        if (existingCompany) {
            return res.status(400).json({
                message: "Company already exists",
                success: false
            });
        }

        // create new company
        const newCompany = await Company.create({ name: companyName, userId: req.id });
        return res.status(201).json({
            message: "Company registered successfully",
            success: true,
            company: newCompany
        });


    } catch (error) {
        return res
            .status(500)
            .json({ message: "Error registering company", error: error.message });
    }
};

// Get all companies for a user
export const getCompanies = async (req, res) => {
    try {
        const userId = req.id;
        const companies = await Company.find({ userId });

        // check if companies exist
        if (!companies || companies.length === 0) {
            return res.status(404).json({
                message: "No companies found for this user",
                success: false,
            });
        }
        
        // return list of companies
        return res.status(200).json({
            message:"All companies",
            success:true,
            companies
        })

    } catch (error) {
        return res
            .status(500)
            .json({ message: "Error fetching companies", error: error.message });
    }
};

// Get a single company by ID
export const getCompanyById = async (req, res) => {
    try {
        const companyId = req.params.id;
        const company = await Company.findById({ _id: companyId, userId: req.id });
        // check if company exists
        if (!company) {
            return res.status(404).json({
                message: "Company not found",
                success: false,
            });
        }

        // return company details
        return res.status(200).json({
            message: "Company details fetched successfully",
            success: true,
            company,
        });

    } catch (error) {
        return res
            .status(500)
            .json({ message: "Error fetching company details", error: error.message });
    }
};

// update a company by ID
export const updateCompany = async (req, res) => {
    try {
        const { name, description, website, location } = req.body;
        const companyId = req.params.id;
        const file = req.file;

        const updateData = {};

        if (name) updateData.name = name;
        if (description) updateData.description = description;
        if (website) updateData.website = website;
        if (location) updateData.location = location;

        // example if logo upload exists
        if (file) {
            updateData.logo = file.path; // or cloudinary url
        }

        const company = await Company.findByIdAndUpdate(
            companyId,
            updateData,
            { new: true }
        );

        if (!company) {
            return res.status(404).json({
                message: "Company not found",
                success: false
            });
        }

        return res.status(200).json({
            message: "Company updated successfully",
            success: true,
            company
        });

    } catch (error) {
        return res.status(500).json({
            message: "Error updating company",
            success: false,
            error: error.message
        });
    }
};