import prisma from "../configs/prisma.js";

// Create project
export const createProject = async (req, res) => {
  try {
    const { userId } = await req.auth();
    const {
      workspaceId,
      description,
      name,
      status,
      start_date,
      end_name,
      team_members,
      team_lead,
      progress,
      priority,
    } = req.body;

    // Check if user has admin role for workspace
    const workspace = await prisma.workspace.findUnique({
      where: { id: workspaceId },
      include: { members: { include: { user: true } } },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.code || error.message });
  }
};

// Update project
export const updateProject = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.code || error.message });
  }
};

// Add Member to project
export const addMember = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.code || error.message });
  }
};
