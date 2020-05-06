export default (req, res) => {
  const { data } = req.body
  const secret = process.env.SECRET_CODE
  const secretUrl = process.env.SECRET_VIDEO
  const secretSuccessMsg = process.env.SECRET_SUCCESS_MSG

  if(data === secret) {
    res.status(200).json({ secret: secret, successMessage: secretSuccessMsg, link: secretUrl, isCorrect: true })
  } else {
    res.status(200).json({ isCorrect: false })
  }
}
