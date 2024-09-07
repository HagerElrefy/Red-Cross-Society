function SecHead({headName}) {
  return (
    <div className="flex justify-start items-center gap-2">
        <h6 className="font-bold">{headName}</h6>
        <hr className="w-14" />
    </div>
  )
}
export default SecHead;
