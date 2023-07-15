const express = require("express");
const router = express.Router();
const Profile = require("../models/newUser");

//FETCHING THE USERNAME

router.get("/profile/:id", async (req, res) => {
  
  try {
    const userId = req.params.id
    const user = await Profile.findById(userId) 
    if (!user) {
        res.status(200).json({message: "user does not exist"})
    } else {
        res.status(200).json( user );
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "failed to create user" });
  }
});
router.put("/editProfile/:id", async (req, res) => {
  const { userName, description } = req.body;
  const userId = req.params.id;
  try {
    const updatedUser = await Profile.findByIdAndUpdate(
      userId,
      { userName, description },
      { new: true }
    );
    res.status(200).json({ message: "updated the user", data: updatedUser });
  } catch (error) {
    res.status(500).json({ message: "failed to update blog", error });
  }
});

module.exports = router;
