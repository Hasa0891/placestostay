import { verifyToken } from '@/app/lib/utils/jwt';

export async function middleware(request) {
  const token = request.cookies.get("token")?.value;
  if(token){
    const user = await verifyToken(token);
    if(user.tokenStatus){
      if(user.usertype==="admin" && !request.nextUrl.pathname.startsWith("/dashboard/admin")){
        return Response.redirect(new URL('/dashboard/admin', request.url));
      }
      if(user.usertype==="traveler" && !request.nextUrl.pathname.startsWith("/dashboard/traveler")){
        return Response.redirect(new URL('/dashboard/traveler', request.url));
      }
    }else{
      if(request.nextUrl.pathname.startsWith("/dashboard")){
        return Response.redirect(new URL('/login', request.url));
      }
    }
  }else{
    if(request.nextUrl.pathname.startsWith("/dashboard")){
      return Response.redirect(new URL('/login', request.url));
    }
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|search|images/*|.*\\.png$).*)'],
}
