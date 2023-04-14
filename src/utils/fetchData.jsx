export const fetchFun = async function (location) {
  try {
    const res = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=4ee96dfd14d44dfcb72141708231204&q=${location}&aqi=yes`
    );
    if (res.status !== 200) throw new Error("error");
    const data = await res.json();
    return data;
  } catch (error) {
    return {
      err: "error",
    };
  }
};
export async function getLocationNFetch() {
  const res = await fetch(
    "http://api.weatherapi.com/v1/ip.json?key=4ee96dfd14d44dfcb72141708231204&q=auto:ip"
  );

  const data = await res.json();
  return fetchFun(data.city);
}
