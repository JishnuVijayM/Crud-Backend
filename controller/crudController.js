const crudModel = require('../models/crudmodel');

exports.fetchData = async (req, res) => {

    try {
        const data = await crudModel.find()

        if (!data) return res.status(404).json({ message: "No data found" })

        return res.status(200).send(data)
    } catch (error) {

        return res.status(500).json({ message: "Error finding data", error: error.message })
    }

};

exports.postData = async (req, res) => {
    try {
        const data = req.body;

        if (!data || Object.keys(data).length === 0) {
            return res.status(400).json({ message: "No data found in request body" });
        }

        const newData = new crudModel(data);

        await newData.save();

        return res.status(201).json({ message: "Data added successfully", data: newData });

    } catch (error) {
        return res.status(500).json({ message: "Error saving data", error: error.message });
    }
};

exports.editData = async (req, res) => {
    try {

        const data = req.body
        const id = req.params.id;

        if (!data || Object.keys(data).length === 0) {
            return res.status(401).json({ message: "Data not found" })
        }

        if (!id) return res.status(401).json({ message: "Id not found" })

        const newData = await crudModel.findByIdAndUpdate(id, data, { new: true });

        if (!newData) {
            return res.status(404).json({ message: "No data found with the provided ID" });
        }

        res.status(200).json({ message: "Data updated succesfully", data: newData })

    } catch (error) {
        return res.status(500).json({ message: "Error updating data", error: error.message });
    }
}

exports.deleteData = async (req, res) => {
    try {
        const id = req.params.id;

        const data = await crudModel.findById({ _id: id })

        if (!data) return res.status(404).json({ message: "No data found with the provided ID" });

        await crudModel.findByIdAndDelete(id);

        return res.status(200).json({ message: "User deleted successfully" });

    } catch (error) {
        return res.status(500).json({ message: "Error deleting data", error: error.message });
    }
};
