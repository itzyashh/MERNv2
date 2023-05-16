export const test = (req, res) => {
    res.status(200).json(
        {
            success: true,
            message: 'This is a test'
        }
    );
}